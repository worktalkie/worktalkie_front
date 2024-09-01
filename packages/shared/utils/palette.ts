import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root, .light, .light-theme {
    --violet-1: #fdfdff;
    --violet-2: #f7f9ff;
    --violet-3: #edf1ff;
    --violet-4: #e1e8ff;
    --violet-5: #d3ddff;
    --violet-6: #c1ceff;
    --violet-7: #a9baff;
    --violet-8: #8b9eff;
    --violet-9: #4d4afe;
    --violet-10: #4340e1;
    --violet-11: #4747e8;
    --violet-12: #21266d;

    --violet-a1: #0000ff02;
    --violet-a2: #0040ff08;
    --violet-a3: #0039ff12;
    --violet-a4: #003cff1e;
    --violet-a5: #003aff2c;
    --violet-a6: #0036ff3e;
    --violet-a7: #0033ff56;
    --violet-a8: #002aff74;
    --violet-a9: #0400feb5;
    --violet-a10: #0400d7bf;
    --violet-a11: #0000dfb8;
    --violet-a12: #000657de;

    --violet-contrast: #fff;
    --violet-surface: #f5f8ffcc;
    --violet-indicator: #4d4afe;
    --violet-track: #4d4afe;

    --gray-1: #fcfcfd;
    --gray-2: #f9f9fb;
    --gray-3: #eff0f3;
    --gray-4: #e7e8ec;
    --gray-5: #e0e1e6;
    --gray-6: #d8d9e0;
    --gray-7: #cdced7;
    --gray-8: #b9bbc6;
    --gray-9: #8b8d98;
    --gray-10: #80828d;
    --gray-11: #62636c;
    --gray-12: #1e1f24;

    --gray-a1: #00005503;
    --gray-a2: #00005506;
    --gray-a3: #00104010;
    --gray-a4: #000b3618;
    --gray-a5: #0009321f;
    --gray-a6: #00073527;
    --gray-a7: #00063332;
    --gray-a8: #00083046;
    --gray-a9: #00051d74;
    --gray-a10: #00051b7f;
    --gray-a11: #0002119d;
    --gray-a12: #000107e1;

    --gray-contrast: #FFFFFF;
    --gray-surface: #ffffffcc;
    --gray-indicator: #8b8d98;
    --gray-track: #8b8d98;
  }

  @supports (color: color(display-p3 1 1 1)) {
    @media (color-gamut: p3) {
      :root, .light, .light-theme {
        --violet-1: oklch(99.4% 0.002 274.3);
        --violet-2: oklch(98.2% 0.011 274.3);
        --violet-3: oklch(96.1% 0.023 274.3);
        --violet-4: oklch(93.5% 0.046 274.3);
        --violet-5: oklch(90.4% 0.07 274.3);
        --violet-6: oklch(86.3% 0.096 274.3);
        --violet-7: oklch(80.7% 0.118 274.3);
        --violet-8: oklch(73% 0.155 274.3);
        --violet-9: oklch(53.8% 0.256 274.3);
        --violet-10: oklch(49.1% 0.234 274.3);
        --violet-11: oklch(51% 0.234 274.3);
        --violet-12: oklch(31.3% 0.121 274.3);

        --violet-a1: color(display-p3 0.02 0.02 1 / 0.008);
        --violet-a2: color(display-p3 0.02 0.267 0.878 / 0.032);
        --violet-a3: color(display-p3 0.008 0.184 0.945 / 0.067);
        --violet-a4: color(display-p3 0.004 0.212 0.933 / 0.114);
        --violet-a5: color(display-p3 0.004 0.192 0.929 / 0.165);
        --violet-a6: color(display-p3 0.004 0.188 0.937 / 0.236);
        --violet-a7: color(display-p3 0.004 0.161 0.941 / 0.326);
        --violet-a8: color(display-p3 0.004 0.125 0.937 / 0.44);
        --violet-a9: color(display-p3 0.012 0 0.941 / 0.71);
        --violet-a10: color(display-p3 0.012 0 0.796 / 0.75);
        --violet-a11: color(display-p3 0 0 0.827 / 0.722);
        --violet-a12: color(display-p3 0 0.02 0.322 / 0.867);

        --violet-contrast: #fff;
        --violet-surface: color(display-p3 0.961 0.973 1 / 0.8);
        --violet-indicator: oklch(53.8% 0.256 274.3);
        --violet-track: oklch(53.8% 0.256 274.3);

        --gray-1: oklch(99.1% 0.001 277.7);
        --gray-2: oklch(98.2% 0.003 277.7);
        --gray-3: oklch(95.6% 0.005 277.7);
        --gray-4: oklch(93.1% 0.006 277.7);
        --gray-5: oklch(91% 0.008 277.7);
        --gray-6: oklch(88.8% 0.009 277.7);
        --gray-7: oklch(85.3% 0.012 277.7);
        --gray-8: oklch(79.4% 0.016 277.7);
        --gray-9: oklch(64.6% 0.016 277.7);
        --gray-10: oklch(61% 0.016 277.7);
        --gray-11: oklch(50.3% 0.014 277.7);
        --gray-12: oklch(24.1% 0.01 277.7);

        --gray-a1: color(display-p3 0.024 0.024 0.349 / 0.012);
        --gray-a2: color(display-p3 0.024 0.024 0.349 / 0.024);
        --gray-a3: color(display-p3 0.008 0.067 0.255 / 0.063);
        --gray-a4: color(display-p3 0.012 0.051 0.216 / 0.095);
        --gray-a5: color(display-p3 0.004 0.039 0.2 / 0.122);
        --gray-a6: color(display-p3 0.004 0.027 0.18 / 0.153);
        --gray-a7: color(display-p3 0.008 0.02 0.173 / 0.206);
        --gray-a8: color(display-p3 0.016 0.016 0.18 / 0.289);
        --gray-a9: color(display-p3 0.012 0.012 0.196 / 0.451);
        --gray-a10: color(display-p3 0.016 0.016 0.184 / 0.483);
        --gray-a11: color(display-p3 0.016 0.016 0.165 / 0.565);
        --gray-a12: color(display-p3 0.016 0.016 0.098 / 0.886);

        --gray-contrast: #FFFFFF;
        --gray-surface: color(display-p3 0.976 0.984 1 / 0.8);
        --gray-indicator: oklch(64.6% 0.016 277.7);
        --gray-track: oklch(64.6% 0.016 277.7);
      }
    }
  }
`;
