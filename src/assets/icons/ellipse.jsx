const Ellipse = ({ width = 41, color, className }) => {
  let svg;
  switch (color) {
    case "blue":
      svg = (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 85 85"
          fill="none"
        >
          <circle
            cx="42.6732"
            cy="42.9455"
            r="41.5021"
            transform="rotate(7.76637 42.6732 42.9455)"
            fill="url(#paint0_radial_2_204)"
            stroke="url(#paint1_radial_2_204)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_204"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(55.5433 66.1717) rotate(-106.618) scale(64.4598 55.4518)"
            >
              <stop stopColor="#045DFA" />
              <stop offset="0.831635" stopColor="#0FC1D7" />
              <stop offset="1" stopColor="#06F6C7" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2_204"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(18.2276 12.7752) rotate(49.4145) scale(85.7286)"
            >
              <stop stopColor="#5EFFDF" />
              <stop offset="1" stopColor="#0777F1" stoppacity="0.41" />
            </radialGradient>
          </defs>
        </svg>
      );
      break;
    case "green":
      svg = (
        <svg
          className={className}
          width={width}
          height={width}
          viewBox="0 0 97 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2_688)">
            <circle
              cx="48.4168"
              cy="48.4168"
              r="43.758"
              transform="rotate(-25.7323 48.4168 48.4168)"
              fill="url(#paint0_radial_2_688)"
            />
            <circle
              cx="48.4168"
              cy="48.4168"
              r="43.258"
              transform="rotate(-25.7323 48.4168 48.4168)"
              stroke="url(#paint1_radial_2_688)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2_688"
              x="0.648804"
              y="0.648804"
              width="95.536"
              height="95.5361"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_2_688"
              />
            </filter>
            <radialGradient
              id="paint0_radial_2_688"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.09 8.69807) rotate(90.4621) scale(83.4794)"
            >
              <stop stopColor="#DDF92C" />
              <stop offset="0.445112" stopColor="#8FEC36" />
              <stop offset="1" stopColor="#00D448" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2_688"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.3479 12.107) rotate(80.1061) scale(81.2765)"
            >
              <stop stopColor="#E2C1FF" stopOpacity="0.53" />
              <stop offset="1" stopColor="#853DF2" stopOpacity="0.55" />
            </radialGradient>
          </defs>
        </svg>
      );
      break;
    case "purple":
      svg = (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 153 153"
          fill="none"
        >
          <circle
            cx="76.3865"
            cy="76.3865"
            r="75.445"
            transform="rotate(-25.7323 76.3865 76.3865)"
            fill="url(#paint0_radial_2_689)"
            stroke="url(#paint1_radial_2_689)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_689"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(77.5549 7.45187) rotate(90.4621) scale(144.884)"
            >
              <stop stopColor="#DEA8FF" />
              <stop offset="0.445112" stopColor="#9D6AD9" />
              <stop offset="1" stopColor="#7A2BF6" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2_689"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(78.0023 13.3684) rotate(80.1061) scale(141.061)"
            >
              <stop stopColor="#E2C1FF" stopOpacity="0.53" />
              <stop offset="1" stopColor="#853DF2" stopOpacity="0.55" />
            </radialGradient>
          </defs>
        </svg>
      );
      break;
    default:
      svg = (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 153 153"
          fill="none"
        >
          <circle
            cx="76.3865"
            cy="76.3865"
            r="75.445"
            transform="rotate(-25.7323 76.3865 76.3865)"
            fill="url(#paint0_radial_2_689)"
            stroke="url(#paint1_radial_2_689)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_689"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(77.5549 7.45187) rotate(90.4621) scale(144.884)"
            >
              <stop stopColor="#DEA8FF" />
              <stop offset="0.445112" stopColor="#9D6AD9" />
              <stop offset="1" stopColor="#7A2BF6" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2_689"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(78.0023 13.3684) rotate(80.1061) scale(141.061)"
            >
              <stop stopColor="#E2C1FF" stopOpacity="0.53" />
              <stop offset="1" stopColor="#853DF2" stopOpacity="0.55" />
            </radialGradient>
          </defs>
        </svg>
      );
  }

  return svg;
};

export default Ellipse;
