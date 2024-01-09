import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButtonSite extends Schema.Component {
  collectionName: 'components_elements_button_sites';
  info: {
    displayName: 'Button Site';
  };
  attributes: {
    Daftar: Attribute.Component<'shared.link'>;
    Login: Attribute.Component<'shared.link'>;
    Alternatif: Attribute.Component<'shared.link', true> &
      Attribute.SetMinMax<{
        min: 5;
        max: 5;
      }>;
  };
}

export interface ElementsFaqcontent extends Schema.Component {
  collectionName: 'components_elements_faqcontents';
  info: {
    displayName: 'Faqcontent';
  };
  attributes: {
    title: Attribute.String;
    headline: Attribute.Text;
    faqtext: Attribute.Component<'shared.faq', true>;
  };
}

export interface ElementsFooter extends Schema.Component {
  collectionName: 'components_elements_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Footerlink: Attribute.Component<'shared.link', true>;
  };
}

export interface ElementsFootertext extends Schema.Component {
  collectionName: 'components_elements_footertexts';
  info: {
    displayName: 'Footertext';
  };
  attributes: {
    textfooter: Attribute.Text;
  };
}

export interface ElementsHeader extends Schema.Component {
  collectionName: 'components_elements_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Attribute.Component<'elements.logo'>;
    runningtext: Attribute.Component<'elements.runningtext'>;
    banner: Attribute.Component<'elements.slide'>;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoBrand: Attribute.Media;
  };
}

export interface ElementsRichtext extends Schema.Component {
  collectionName: 'components_elements_richtexts';
  info: {
    displayName: 'Richtext';
    description: '';
  };
  attributes: {
    richtext: Attribute.Blocks;
  };
}

export interface ElementsRunningtext extends Schema.Component {
  collectionName: 'components_elements_runningtexts';
  info: {
    displayName: 'Runningtext';
  };
  attributes: {
    marquee: Attribute.Text;
  };
}

export interface ElementsSlide extends Schema.Component {
  collectionName: 'components_elements_slides';
  info: {
    displayName: 'Slide';
  };
  attributes: {
    slideImage: Attribute.Media;
  };
}

export interface ElementsWidget extends Schema.Component {
  collectionName: 'components_elements_widgets';
  info: {
    displayName: 'Widget';
    description: '';
  };
  attributes: {};
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    canonical: Attribute.String;
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaKeyword: Attribute.Text;
    metaTagConsole: Attribute.String;
    favicon: Attribute.Media;
  };
}

export interface SharedDomainList extends Schema.Component {
  collectionName: 'components_shared_domain_lists';
  info: {
    displayName: 'Domain List';
  };
  attributes: {
    name: Attribute.String;
    domainUrl: Attribute.String;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button-site': ElementsButtonSite;
      'elements.faqcontent': ElementsFaqcontent;
      'elements.footer': ElementsFooter;
      'elements.footertext': ElementsFootertext;
      'elements.header': ElementsHeader;
      'elements.logo': ElementsLogo;
      'elements.richtext': ElementsRichtext;
      'elements.runningtext': ElementsRunningtext;
      'elements.slide': ElementsSlide;
      'elements.widget': ElementsWidget;
      'seo.meta-data': SeoMetaData;
      'shared.domain-list': SharedDomainList;
      'shared.faq': SharedFaq;
      'shared.link': SharedLink;
    }
  }
}
