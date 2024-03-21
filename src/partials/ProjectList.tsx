import { ColorTags, Project, Section, Tags } from '@/boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <span className="text-green-400">Projects</span>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="JetForm"
        description="Form order Open Source yang bisa menjadi alternative dari OrderOnline, Tribelio, Lynk.id dan kawan-kawan."
        link="https://www.jetform.me?utm_source=upkoding.com&utm_medium=recent-projects"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'JetForm',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>saas</Tags>
            <Tags color={ColorTags.SKY}>open-source</Tags>
            <Tags color={ColorTags.ROSE}>phoenix</Tags>
            <Tags color={ColorTags.FUCHSIA}>elixir</Tags>
          </>
        }
      />
      <Project
        name="E-book Zero To Programmer"
        description="Zero to Programmer merupakan rangkuman perjalanan Bli Eka Putra mengarungi dunia IT dari NOL. Dunia aneh yang benar-benar mengubah hidupnya 180 derajat!"
        link="https://app.jetform.me/p/zero-to-programmer-ebook?utm_source=upkoding.com&utm_medium=recent-projects"
        img={{
          src: '/assets/images/project-fire.png',
          alt: 'E-book Zero To Programmer',
        }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>free</Tags>
            <Tags color={ColorTags.VIOLET}>e-book</Tags>
            <Tags color={ColorTags.FUCHSIA}>audio-book</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
