import type { Schema, Attribute } from '@strapi/strapi';

export interface PortfolioContactDetails extends Schema.Component {
  collectionName: 'components_portfolio_contact_details';
  info: {
    displayName: 'contact-details';
    icon: 'phone';
  };
  attributes: {
    phone_number: Attribute.String & Attribute.Required;
    location: Attribute.String;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface PortfolioHeaderSection extends Schema.Component {
  collectionName: 'components_portfolio_header_sections';
  info: {
    displayName: 'header-section';
    icon: 'house';
    description: '';
  };
  attributes: {
    full_name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'John Doe'>;
    caption: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Software Engineer'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"I'm a software engineer looking for new opportunities!">;
    headshot: Attribute.Media & Attribute.Required;
  };
}

export interface PortfolioSocialLink extends Schema.Component {
  collectionName: 'components_portfolio_social_links';
  info: {
    displayName: 'social-link';
    icon: 'link';
  };
  attributes: {
    platform: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'LinkedIn'>;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ProjectsProjectCard extends Schema.Component {
  collectionName: 'components_portfolio_project_cards';
  info: {
    displayName: 'project-card';
    icon: 'code';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    link: Attribute.String;
  };
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_portfolio_projects';
  info: {
    displayName: 'projects-section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Projects'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"Some projects I've worked on!">;
    projects: Attribute.Component<'projects.project-card', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'portfolio.contact-details': PortfolioContactDetails;
      'portfolio.header-section': PortfolioHeaderSection;
      'portfolio.social-link': PortfolioSocialLink;
      'projects.project-card': ProjectsProjectCard;
      'projects.projects': ProjectsProjects;
    }
  }
}
