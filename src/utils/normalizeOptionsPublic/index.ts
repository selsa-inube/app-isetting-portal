const normalizeOptionsByPublicCode = (
  publicCode: string,
  options: { [key: string]: string | React.ReactNode }[]
) => options.find((data) => data.publicCode === publicCode);

export { normalizeOptionsByPublicCode };
