function Illustration(props) {
  return (
    <svg
      width={486}
      height={534}
      viewBox="0 0 486 534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* <circle cx={167} cy={60} r={60} fill="currentColor" />
      <circle cx={37.5} cy={215.5} r={37.5} fill="currentColor" /> */}
      <circle cx="94" cy="71" r="46" fill="#D7F484"/>

      <polygon 
        points="401,181 359,231 339,301 314,318 293,363 277,418 235,460 203,511 401,512" 
        fill="currentColor"
      />
      <path 
        fill="currentColor"
        d="M234,5a7.2,7.2 0 01 14,3l-25,145l-197,188c-8,10-14,25-10,40l18,47c9,24,10,47,1,75a7.2,7.2 0 01-13-6c7-18,6-47-3-70l-15-37c-9-22-2-44,13-60l192-182z" 
      />
      <path 
        fillRule="evenodd"
        clipRule="evenodd"
        d="M121,318l57-14l25,19c2,2,3,4,4,6l27,72a21,21 0 01-45,10l-21-57l-46-35z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M209,132a7.2,7.2 0 01 5,37h-84l22,79l57-14c6-1,10-1,16,2l68,46a7.2,7.2 0 01-26,38l-57-39l-88,22c-20,3-30-2-36-19l-28-75l-18,27l22.5,61a7,7 0 01-32.5,19l-27-72c-3-5-3-16,0-21l45-67c8-11,25-24,43-24z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Illustration;
