interface NavProps {
  name: string;
}

export default function Nav({ name }: NavProps) {
  return (
    <div className="flex min-w-20 p-3 items-center justify-center">
      <div className="font-bold mr-2">{name}</div>
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ExpandMoreIcon"
        width="20"
        height="20"
      >
        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
    </div>
  );
}
