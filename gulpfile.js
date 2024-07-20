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

// Обрабатываем JS файлы (просто подключаем к серверу)
export const scripts = () => {
	return (
		src('src/js/*.js')
			.pipe(browserSync.stream())
	);
};

// ВНИМАНИЕ ! Данная функция html, по окончании своей работы,
// запускает функцию html_index. Поэтому, функция html_index 
// не включена в поток экспорта
// Собираем html-файлы и перемещаем результат в папку 'src'
export const html = () => {
	return src(['src/html_pages/*.html'])
		.pipe(include({ prefix: '@@' }))
		.pipe(dest(['src']))
		.pipe(browserSync.stream());
};

// Перезаписываем запускающий файл index.html в корне проекта
export const html_index = () => {
	return src('src/main.html')
		.pipe(concat('index.html'))
		.pipe(dest('src/'))
		.pipe(browserSync.stream());
};

export const watching = () => {
	watch(['src/**/*.scss'], styles);
	watch(['src/js/*.js'], scripts);
	watch(['src/html_pages/**/*.html'], html);
	watch(['src/main.html'], html_index);
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
			'src/*.html',
			// 'src/index.html',
			'src/fonts/*.*',
		],
		{ base: 'src' }
	).pipe(dest('dist'));
};

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
	buildImg,
);

export default parallel(styles, scripts, html, browsersync, watching);

// export default parallel(
// 	styles,
// 	scripts,
// 	series(html, html_index),
// 	browsersync,
// 	watching
// );
