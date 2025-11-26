import { inube } from "@inubekit/inubekit";

const phoneFieldTokens = {
  border: {
    color: inube.palette.neutral.N40,
  },
  label: {
    color: {
      regular: inube.palette.neutral.N900,
      disabled: inube.palette.neutral.N500,
    },
  },
  field: {
    border: {
      color: {
        regular: inube.palette.neutral.N40,
        focus: inube.palette.blue.B500,
        invalid: inube.palette.red.R400,
      },
    },
    background: {
      color: {
        regular: inube.palette.neutral.N0,
        disabled: inube.palette.neutral.N10,
      },
    },
  },
  countryButton: {
    background: {
      color: {
        regular: inube.palette.neutral.N10,
        hover: inube.palette.neutral.N30,
      },
    },
    border: {
      color: {
        regular: inube.palette.neutral.N40,
      },
    },
    content: {
      color: {
        regular: inube.palette.neutral.N900,
      },
    },
  },
  numberInput: {
    placeholder: {
      color: {
        regular: inube.palette.neutral.N300,
      },
    },
  },
  dropdown: {
    background: {
      color: inube.palette.neutral.N0,
    },
    border: {
      color: inube.palette.neutral.N40,
    },
    shadow: {
      color: inube.palette.neutralAlpha.N30A,
    },
  },
  countryItem: {
    background: {
      active: inube.palette.neutral.N30,
      hover: inube.palette.neutral.N30,
    },
    code: {
      color: inube.palette.neutral.N500,
    },
  },
  helperText: {
    color: {
      regular: inube.palette.neutral.N500,
      error: inube.palette.red.R400,
    },
  },
};

export { phoneFieldTokens };