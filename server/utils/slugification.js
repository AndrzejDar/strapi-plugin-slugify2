'use strict';

const slugify = require('slugify');
const slugifyWithCount = slugify.counter();

const toSlug = (string, options) => slugify(string);
const toSlugWithCount = (string, options) => slugify(string);

module.exports = {
	toSlug,
	toSlugWithCount,
};
