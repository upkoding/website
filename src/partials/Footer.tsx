import { FooterCopyright, Section } from '@/boilerplate-components';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} email="eka@upkoding.com" />
  </Section>
);

export { Footer };
