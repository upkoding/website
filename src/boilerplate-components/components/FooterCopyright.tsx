type IFooterCopyrightProps = {
  site_name: string;
  email: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-sm text-gray-200">
      © Copyright {new Date().getFullYear()} {props.site_name}. Kontak:{' '}
      <a
        href={`mailto:${props.email}`}
        className="text-green-400 hover:underline"
      >
        {props.email}
      </a>
    </div>
  </div>
);

export { FooterCopyright };
