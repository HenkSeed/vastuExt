import { src, dest, watch, parallel, series } from 'gulp';

// Работа с файлами стилей
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const scss = gulpSass(dartSass);

// Объединение нескольких файлов в один,
// сжатие и переименование итогового файла
import concat from 'gulp-concat';

// Работа с файлами js
import ugly from 'gulp-uglify-es';
const uglify = ugly.default;

// Запускаем сервер
import bSync from 'browser-sync';
const browserSync = bSync.create();

// Добавляем префиксы для совместимости версий
import autoprefixer from 'gulp-autoprefixer';

// Добавляем пакет объединения файлов
import include from 'gulp-file-include';

// Настраиваем очистку папки build
import clean from 'gulp-clean';

import ghPages from 'gh-pages';

import path from 'path';

// import fs from 'fs/promises';
// import { constants } from 'fs';

export const deploy = (cb) => {
	ghPages.publish(path.join(process.cwd(), '/dist'), cb);
};

export const styles = () => {
	return (
		src('src/**/*.scss')
			.pipe(concat('style.css'))
			.pipe(
				autoprefixer({
					overrideBrowserslist: ['last 10 versions'],
					cascade: false,
				})
			)
			// .pipe(scss({ outputStyle: 'compressed' })) /* Если нужен сжатый style.css */
			.pipe(scss())
			.pipe(dest('src/css'))
			.pipe(browserSync.stream())
	);
};

// Обрабатываем JS файлы
export const scripts = () => {
	return (
		src('src/js/*.js')
		// src('src/js_modules/*.js') /* Если надо две папки js, определяем источник */
			// .pipe(concat('script.js'))
			// .pipe(uglify())
			// .pipe(dest('src/js')) /* Если надо две папке js, определяем цель */
			.pipe(browserSync.stream())
	);
};

// ВНИМАНИЕ ! Данная функция html, по окончании своей работы,
// запускает функцию htmlResult, которая, отработав в свою очередь,
// запускает функцию html_index. Поэтому, две эти функции не включены
// в поток экспорта
// // Собираем html-файлы и перемещаем результат в папку 'src/html_tmp'
// Собираем html-файлы и перемещаем результат в папку 'src'
export const html = () => {
	return src(['src/html_pages/*.html'])
		.pipe(include({ prefix: '@@' }))
		.pipe(dest(['src']))
		.pipe(browserSync.stream());
};

// export const html = () => {
// 	// return src(['src/**/*.html'], { base: 'src' })
// 	return src(['src/html_pages/**/*.html'])
// 		.pipe(include({ prefix: '@@' }))
// 		.pipe(dest(['src/html_tmp']));
// 	// .pipe(browserSync.stream());
// };

// Собранные файлы html перемещаем в рабочую папку
// и подключаем к процессу работы локального сервера
// export const htmlResult = () => {
// 	return src(['src/html_tmp/*.html'])
// 		.pipe(dest(['src']))
// 		.pipe(browserSync.stream());
// };

// Перезаписываем запускающий файл index.html в корне проекта
export const html_index = () => {
	return src('src/main.html')
		.pipe(concat('index.html'))
		.pipe(dest('src/'))
		.pipe(browserSync.stream());
};

// export const remove_html_tmp = () => {
// 	return src('src/html_tmp/**/*.*').pipe(clean());
// };

export const watching = () => {
	// watch(['src/style.scss'], styles);
	watch(['src/**/*.scss'], styles);
	// // watch(['src/js/**/*.js'], scripts);
	// // watch(['src/js/main.js'], scripts);
	// watch(['src/js_modules/*.js'], scripts);
	watch(['src/js/*.js'], scripts);
	watch(['src/html_pages/**/*.html'], html);
	// watch(['src/html_tmp/*.html'], htmlResult);
	watch(['src/main.html'], html_index);
	// watch(['src/index.html'], remove_html_tmp);
};

export const browsersync = () => {
	browserSync.init({
		server: {
			baseDir: 'src/',
		},
	});
};

export const cleanDist = () => {
	return src('dist/*').pipe(clean());
};

export const building = () => {
	return src(
		[
			'src/css/*.css',
			'src/js/*.js',
			// 'src/js/main.min.js',
			// 'src/html_result/**/*.html',
			'src/*.html',
			'src/index.html',
			'src/fonts/*.*',
		],
		{ base: 'src' }
	).pipe(dest('dist'));
};

// export const buildHTML = () => {
// 	return src(['src/*.html']).pipe(dest('dist'));
// };

export const buildImg = () => {
	return src(
		['src/images/**/*'],
		{ base: 'src' },
		{ encoding: false },
		{ buffer: false }
	).pipe(dest('dist', { encoding: false }));
};

export const build = series(
	cleanDist,
	building,
	// buildHTML,
	buildImg,
	// remove_html_tmp
);

export default parallel(styles, scripts, html, browsersync, watching);

// export default parallel(
// 	styles,
// 	scripts,
// 	series(html, htmlResult, html_index, remove_html_tmp),
// 	browsersync,
// 	watching
// );
