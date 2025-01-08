// import * as React from "react";

// const Logo = () => (
//     <svg
//         className="h-8 md:h-16 w-auto"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 341 77"
//     >
//         <path
//             fill="#723F5F"
//             d="M9.058 58q-.786 0-1.197-.444a1.5 1.5 0 0 1-.376-.991q0-.513.342-.923.375-.445 1.094-.445h6.255v-21.43l-4.17.854a1.8 1.8 0 0 1-.41.034q-.684 0-1.026-.41a1.54 1.54 0 0 1-.341-.957q0-1.094 1.025-1.299l5.845-1.162q.478-.102.786-.102.82 0 1.025.546.239.513.274 1.368l.136 3.554q1.812-2.802 5.093-4.375 3.281-1.606 8.306-1.606 1.71 0 2.358.547.65.513.65 1.504v4.717q0 .957-.513 1.435-.514.479-1.162.479-.582 0-1.094-.445-.513-.444-.513-1.333v-4.101q-4.374 0-7.998 1.743-3.589 1.71-4.99 5.264v15.175h11.484q.684 0 1.026.445.342.41.342.957 0 .511-.376.957-.342.444-1.026.444zm45.554.581q-4.546 0-8.066-1.709-3.486-1.743-5.469-4.99-1.948-3.247-1.948-7.793 0-4.375 2.05-7.486 2.085-3.11 5.504-4.75 3.452-1.641 7.553-1.641 5.298 0 8.785 2.905 3.52 2.906 3.52 8.51 0 1.266-.718 2.12-.717.855-1.914.855H42.41q.171 5.57 3.52 8.374 3.351 2.802 8.409 2.802 2.495 0 4.99-.922a13 13 0 0 0 4.478-2.803q.717-.582 1.401-.581.615 0 .991.444t.376 1.06q0 .751-.615 1.435-1.264 1.368-3.247 2.29a20 20 0 0 1-4.17 1.401q-2.154.48-3.93.48m-12.1-16.475h21.124a17.3 17.3 0 0 0-.41-2.802 8.7 8.7 0 0 0-1.3-3.008q-.921-1.436-2.768-2.358-1.812-.924-4.853-.923-4.99 0-8.1 2.358-3.078 2.359-3.692 6.733m42.855 16.475q-6.836 0-11.108-3.828-4.239-3.863-4.239-10.664 0-4.375 2.086-7.486 2.118-3.11 5.605-4.75 3.52-1.641 7.759-1.641 5.093 0 8.408 1.948 3.35 1.949 3.35 6.563 0 1.161-.513 1.948-.48.786-1.538.786-1.23 0-1.573-1.88-.308-1.913-.683-5.024-1.812-.889-3.52-1.197a17.4 17.4 0 0 0-3.419-.341q-5.981 0-9.33 2.94-3.35 2.938-3.35 8.134 0 5.947 3.281 8.818 3.315 2.871 8.51 2.871 3.248 0 5.367-.888 2.119-.89 4.136-2.769a1.97 1.97 0 0 1 1.401-.547q1.197 0 1.196 1.402 0 .751-.615 1.435-1.264 1.368-3.247 2.29a19.5 19.5 0 0 1-4.067 1.401q-2.12.48-3.897.48m33.934-34.966a2.82 2.82 0 0 1-2.017-.82 2.7 2.7 0 0 1-.82-1.983q0-1.196.82-2.016a2.82 2.82 0 0 1 2.017-.82q1.196 0 1.982.82.82.82.821 2.017 0 1.161-.821 1.982-.786.82-1.982.82M105.731 58q-.785 0-1.196-.444-.375-.48-.376-1.026 0-.513.342-.923.376-.41 1.094-.41h12.715V33.425l-11.382 1.538a.3.3 0 0 0-.137.034h-.103q-.683 0-1.059-.444a1.6 1.6 0 0 1-.342-.991q0-.48.274-.89.273-.41.82-.478l13.603-1.88a1.4 1.4 0 0 1 .376-.034q1.231 0 1.231 1.094v23.823h11.382q.683 0 1.025.445.342.444.342.957 0 .547-.376.99-.342.411-1.026.411zm29.354 12.647q-.718 0-1.094-.445a1.6 1.6 0 0 1-.342-.991q0-.512.342-.957.342-.41 1.026-.41h3.076V33.8l-3.692.718-.341.068a1.7 1.7 0 0 1-.342.034q-.615 0-.991-.376a1.4 1.4 0 0 1-.342-.923q0-.41.239-.82.274-.444.889-.581l5.605-1.128q.478-.069.615-.068 1.265 0 1.333 1.333l.103 2.358q1.64-1.674 4.204-2.94 2.598-1.264 5.845-1.264 4.034 0 6.87 1.846 2.87 1.81 4.375 5.024 1.538 3.179 1.538 7.315 0 4.067-1.572 7.28-1.539 3.213-4.444 5.058-2.904 1.846-6.904 1.846-3.315 0-5.571-.991a17 17 0 0 1-4.136-2.632v12.886h7.383q.718 0 1.059.41.376.41.376.923 0 .546-.41.991-.376.478-1.162.478zm15.791-14.869q3.28 0 5.469-1.572 2.187-1.605 3.281-4.204t1.094-5.605q0-3.076-1.06-5.64-1.059-2.598-3.213-4.17-2.118-1.572-5.298-1.572-3.452 0-5.878 1.435-2.393 1.401-3.897 3.52v13.4a12 12 0 0 0 3.931 3.212q2.324 1.197 5.571 1.196m31.268 2.803q-4.547 0-8.067-1.709-3.486-1.743-5.469-4.99-1.947-3.247-1.948-7.793 0-4.375 2.051-7.486 2.085-3.11 5.503-4.75 3.451-1.641 7.554-1.641 5.297 0 8.784 2.905 3.52 2.906 3.52 8.51 0 1.266-.718 2.12-.717.855-1.914.855h-21.499q.171 5.57 3.521 8.374 3.35 2.802 8.408 2.802 2.496 0 4.99-.922a13 13 0 0 0 4.478-2.803q.718-.582 1.401-.581.615 0 .991.444t.376 1.06q0 .751-.615 1.435-1.264 1.368-3.247 2.29a20 20 0 0 1-4.17 1.401q-2.153.48-3.93.48m-12.1-16.475h21.123a17.4 17.4 0 0 0-.41-2.802 8.8 8.8 0 0 0-1.299-3.008q-.922-1.436-2.769-2.358-1.81-.924-4.853-.923-4.99 0-8.101 2.358-3.076 2.359-3.691 6.733"
//         ></path>
//         <path
//             fill="#6E6E6E"
//             d="M207.195 58q-.853 0-1.299-.444-.444-.48-.444-1.026 0-.547.41-.99.445-.48 1.299-.48h5.571V20.915h-5.434q-.82 0-1.231-.444-.41-.445-.41-.991 0-.582.41-1.026.445-.478 1.299-.478h12.237q5.878 0 10.219 2.119 4.375 2.085 6.802 6.46t2.427 11.245q0 10.835-5.127 15.517Q228.797 58 219.534 58zm8.819-2.94h3.759q8.477 0 12.237-4.34t3.76-12.92q0-8.101-3.999-12.476-4-4.41-11.519-4.409h-4.238zM242.94 58q-.786 0-1.196-.444a1.5 1.5 0 0 1-.376-.991q0-.513.342-.923.376-.445 1.094-.445h6.255v-21.43l-4.17.854a1.8 1.8 0 0 1-.41.034q-.684 0-1.026-.41a1.54 1.54 0 0 1-.342-.957q0-1.094 1.026-1.299l5.844-1.162a4 4 0 0 1 .787-.102q.82 0 1.025.546.24.513.273 1.368l.137 3.554q1.811-2.802 5.093-4.375 3.28-1.606 8.306-1.606 1.708 0 2.358.547.65.513.649 1.504v4.717q0 .957-.512 1.435-.513.479-1.162.479-.581 0-1.094-.445-.513-.444-.513-1.333v-4.101q-4.375 0-7.998 1.743-3.589 1.71-4.99 5.264v15.175h11.484q.684 0 1.026.445a1.45 1.45 0 0 1-.035 1.914q-.34.444-1.025.444zm46.478-34.385a2.82 2.82 0 0 1-2.017-.82 2.7 2.7 0 0 1-.82-1.983q0-1.196.82-2.016a2.82 2.82 0 0 1 2.017-.82q1.196 0 1.982.82.82.82.821 2.017 0 1.161-.821 1.982-.786.82-1.982.82M275.849 58q-.786 0-1.197-.444-.376-.48-.376-1.026 0-.513.342-.923.376-.41 1.094-.41h12.715V33.425l-11.382 1.538a.3.3 0 0 0-.137.034h-.102q-.684 0-1.06-.444a1.6 1.6 0 0 1-.342-.991q0-.48.274-.89.273-.41.82-.478l13.604-1.88a1.4 1.4 0 0 1 .376-.034q1.23 0 1.23 1.094v23.823h11.382q.684 0 1.025.445.342.444.342.957 0 .547-.376.99-.342.411-1.025.411zm29.353 12.647q-.717 0-1.094-.445a1.6 1.6 0 0 1-.341-.991q0-.512.341-.957.342-.41 1.026-.41h3.076V33.8l-3.691.718-.342.068a1.7 1.7 0 0 1-.342.034q-.616 0-.991-.376a1.4 1.4 0 0 1-.342-.923q0-.41.239-.82.274-.444.889-.581l5.605-1.128a6 6 0 0 1 .616-.068q1.264 0 1.333 1.333l.102 2.358q1.64-1.674 4.204-2.94 2.598-1.264 5.845-1.264 4.034 0 6.87 1.846 2.87 1.81 4.375 5.024 1.538 3.179 1.538 7.315 0 4.067-1.572 7.28-1.538 3.213-4.443 5.058-2.906 1.846-6.905 1.846-3.315 0-5.571-.991a17 17 0 0 1-4.136-2.632v12.886h7.383q.718 0 1.06.41.376.41.376.923 0 .546-.411.991-.375.478-1.162.478zm15.791-14.869q3.282 0 5.469-1.572 2.187-1.605 3.281-4.204t1.094-5.605q0-3.076-1.06-5.64-1.059-2.598-3.213-4.17-2.118-1.572-5.297-1.572-3.453 0-5.879 1.435-2.392 1.401-3.897 3.52v13.4a12 12 0 0 0 3.931 3.212q2.323 1.197 5.571 1.196"
//         ></path>
//     </svg>
// );

// export default Logo;


import * as React from "react";

const Logo = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 md:h-10 w-full"
    fill="none"
    viewBox="0 0 414 100"
  >
    <path fill="#6E6E6E" d="M242 0h172v100H242z"></path>
    <path fill="#723F5F" d="M0 0h242v100H0z"></path>
    <path
      fill="#F5F5F5"
      d="M21 68.78V32.85h4.654v9.787l-.48-1.71q1.506-4.107 5.065-6.228 3.558-2.19 8.828-2.19v4.722h-.547a2.3 2.3 0 0 0-.548-.069q-5.68 0-8.896 3.49-3.217 3.423-3.217 9.787V68.78zM62.861 69.123q-5.612 0-9.855-2.327-4.243-2.395-6.638-6.502-2.396-4.175-2.396-9.513 0-5.337 2.259-9.444 2.327-4.106 6.296-6.433 4.038-2.395 9.034-2.395 5.065 0 8.965 2.327 3.969 2.258 6.228 6.433 2.258 4.106 2.258 9.512 0 .343-.068.753v.753H47.668V48.66h28.675l-1.916 1.437q0-3.9-1.71-6.912-1.644-3.08-4.518-4.79-2.874-1.712-6.638-1.712-3.696 0-6.639 1.711t-4.585 4.79q-1.642 3.081-1.642 7.05v.753q0 4.106 1.779 7.254 1.848 3.08 5.064 4.86 3.285 1.71 7.46 1.71 3.285 0 6.09-1.163a12.7 12.7 0 0 0 4.928-3.56l2.738 3.149q-2.396 2.874-6.023 4.38-3.558 1.506-7.87 1.506M103.822 69.123q-5.339 0-9.581-2.327-4.174-2.395-6.57-6.502-2.396-4.175-2.396-9.513 0-5.406 2.396-9.512t6.57-6.433q4.242-2.328 9.581-2.327 4.585 0 8.281 1.78 3.696 1.778 5.817 5.337l-3.627 2.464q-1.849-2.738-4.585-4.038-2.738-1.3-5.955-1.3-3.832 0-6.912 1.78-3.079 1.71-4.859 4.858-1.78 3.149-1.78 7.391 0 4.244 1.78 7.392 1.779 3.147 4.86 4.927 3.078 1.71 6.911 1.711 3.217 0 5.955-1.3t4.585-3.97l3.627 2.464q-2.121 3.49-5.817 5.338-3.696 1.78-8.281 1.78M126.931 68.78V32.85h4.859v35.93zm2.463-43.868q-1.504 0-2.532-1.026-1.026-1.027-1.026-2.464t1.026-2.395Q127.89 18 129.394 18q1.506 0 2.533.958t1.026 2.395q0 1.506-1.026 2.533-.958 1.026-2.533 1.026M163.856 69.123q-4.653 0-8.417-2.122-3.764-2.19-6.023-6.228-2.19-4.106-2.19-9.992 0-5.885 2.19-9.923 2.19-4.105 5.954-6.228 3.764-2.121 8.486-2.121 5.133 0 9.171 2.327 4.106 2.258 6.433 6.433 2.327 4.106 2.327 9.512 0 5.475-2.327 9.582a16.76 16.76 0 0 1-6.433 6.433q-4.038 2.327-9.171 2.327M145.31 82.057V32.851h4.654v10.813l-.479 7.186.684 7.254v23.953zm18.204-17.246q3.832 0 6.844-1.71 3.01-1.78 4.79-4.928 1.78-3.217 1.78-7.392t-1.78-7.322q-1.78-3.15-4.79-4.928-3.012-1.78-6.844-1.78t-6.912 1.78q-3.011 1.78-4.791 4.928-1.71 3.148-1.711 7.322 0 4.175 1.711 7.392 1.78 3.147 4.791 4.927 3.08 1.71 6.912 1.711M206.954 69.123q-5.613 0-9.855-2.327-4.244-2.395-6.639-6.502-2.395-4.175-2.395-9.513 0-5.337 2.258-9.444 2.327-4.106 6.297-6.433 4.037-2.395 9.033-2.395 5.065 0 8.966 2.327 3.97 2.258 6.227 6.433 2.259 4.106 2.259 9.512 0 .343-.069.753v.753h-31.275V48.66h28.675l-1.916 1.437q0-3.9-1.711-6.912-1.643-3.08-4.517-4.79-2.875-1.712-6.639-1.712-3.695 0-6.638 1.711t-4.585 4.79q-1.643 3.081-1.643 7.05v.753q0 4.106 1.779 7.254 1.848 3.08 5.065 4.86 3.285 1.71 7.459 1.71 3.285 0 6.091-1.163a12.7 12.7 0 0 0 4.928-3.56l2.737 3.149q-2.395 2.874-6.022 4.38-3.56 1.506-7.87 1.506M280.052 69.394q-5.187 0-9.295-2.29-4.042-2.29-6.399-6.4Q262 56.597 262 51.14t2.358-9.497q2.357-4.11 6.399-6.4 4.108-2.29 9.295-2.29 4.513 0 8.15 2.021t5.793 6.062q2.223 4.043 2.223 10.104 0 6.062-2.156 10.104-2.088 4.04-5.725 6.13-3.638 2.02-8.285 2.02m.539-5.658q3.368 0 6.062-1.55 2.762-1.549 4.311-4.377 1.617-2.896 1.616-6.669 0-3.84-1.616-6.601-1.55-2.83-4.311-4.378-2.694-1.55-6.062-1.55-3.436 0-6.13 1.55-2.694 1.549-4.311 4.378-1.616 2.761-1.616 6.601 0 3.772 1.616 6.669 1.617 2.829 4.311 4.378t6.13 1.549m12.192 5.254v-9.632l.404-8.285-.674-8.285V19.01h6.466v49.98zM311.214 68.99v-35.7h6.197v9.7l-.606-2.425q1.482-3.705 4.985-5.658t8.621-1.954v6.265a5 5 0 0 0-.808-.068h-.674q-5.186 0-8.217 3.099-3.031 3.098-3.031 8.958V68.99zM338.381 68.99v-35.7h6.466v35.7zm3.233-42.57q-1.885 0-3.166-1.213-1.212-1.212-1.212-2.963 0-1.819 1.212-3.032Q339.728 18 341.614 18t3.099 1.212q1.28 1.146 1.28 2.897 0 1.818-1.213 3.098-1.212 1.213-3.166 1.213M376.121 69.394q-4.445 0-8.15-2.02-3.637-2.09-5.86-6.13-2.155-4.042-2.155-10.104t2.088-10.104q2.156-4.041 5.792-6.062 3.705-2.02 8.285-2.02 5.255 0 9.296 2.29t6.399 6.399q2.358 4.041 2.357 9.497t-2.357 9.565q-2.358 4.11-6.399 6.399-4.041 2.29-9.296 2.29m-18.927 12.663V33.29h6.197v9.632l-.404 8.285.673 8.285v22.565zm18.389-18.321q3.435 0 6.129-1.55 2.762-1.549 4.311-4.377 1.617-2.896 1.617-6.669 0-3.84-1.617-6.601-1.55-2.83-4.311-4.378-2.694-1.55-6.129-1.55-3.369 0-6.13 1.55-2.694 1.549-4.311 4.378-1.55 2.761-1.549 6.601 0 3.772 1.549 6.669 1.617 2.829 4.311 4.378 2.761 1.548 6.13 1.549"
    ></path>
  </svg>
);

export default Logo;