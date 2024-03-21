import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '@/boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo icon="" name="🚀 upkoding" />
      </a>

      <NavMenu>
        <NavMenuItem href="https://blog.upkoding.com/">Blog</NavMenuItem>
        <NavMenuItem href="https://github.com/ekaputra07">GitHub</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
