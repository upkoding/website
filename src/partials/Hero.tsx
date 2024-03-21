import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from '@/boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Halo! saya <GradientText>Eka</GradientText> 👋
        </>
      }
      description={
        <>
          Software Engineer asal Bali yang mungkin lebih dikenal lewat channel
          Youtube{' '}
          <a
            className="text-green-400 hover:underline"
            href="https://www.youtube.com/@upkoding"
            target="_blank"
          >
            UpKoding
          </a>
          . Situs ini adalah sebuah ruang kecil di pojokan Internet tempat saya
          mendokumantasikan proyek, produk atau apapun yang saya kerjakan dan
          hasilkan sebagai seorang developer.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/ekaputra07" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://linkedin.com/in/ekaputra07" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/@upkoding" target="_blank">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
