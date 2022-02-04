import linkResolver from '@/plugins/link-resolver.js';
import prismicDOM from 'prismic-dom';

const Elements = prismicDOM.RichText.Elements;

export default function(type, element, content, children) {
	if (type === 'list-item') {
		return `<li class="list-item">${children.join("")}</li>`;
	}

	if (type === Elements.hyperlink) {
		const url = prismicDOM.Link.url(element.data, linkResolver);
		if (element.data.link_type === 'Document') {
			return `<a href="${url}" data-nuxt-link>${content}</a>`;
		}
	}

	if (type === Elements.image && element.linkTo && element.data.link_type === 'Document') {
		const url = prismicDOM.Link.url(element.linkTo, linkResolver);
		if (element.data.link_type === 'Document') {
			return `<a href="${url}" data-nuxt-link><img src="${element.url}" alt=${element.alt || ''}" copyright="${element.copyright || ''}"></a>`;
		}
	}

	return null;
}
