import Link from "next/link";

export default function Navbar() {
  return (
    <div className="items-center md:flex md:justify-between ">
      <div className="my-5 flex items-center justify-center space-x-5 text-gray-400 md:my-0">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
          >
            <image href="/favicon.png" width="50" height="50" />
          </svg>
        </span>
        <Link href={"/"}>
          <a className="text-2xl font-semibold uppercase">IT Showcase</a>
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-5 text-gray-400">
        <span>
          <a href={"https://www.himatifunib.org"} target={"_blank"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className=""
              viewBox="0 0 50 50"
            >
              <path
                d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                stroke="#333"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </span>
        <span>
          <a href={"https://www.instagram.com/himatifunib/"} target={"_blank"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className=""
              viewBox="0 0 50 50"
            >
              <path d="M24.9994 4.16602C30.6598 4.16602 31.366 4.18685 33.5869 4.29102C35.8056 4.39518 37.316 4.7431 38.6452 5.25977C40.0202 5.78893 41.1785 6.5056 42.3369 7.66185C43.3962 8.7033 44.2159 9.96308 44.7389 11.3535C45.2535 12.6806 45.6035 14.1931 45.7077 16.4118C45.8056 18.6327 45.8327 19.3389 45.8327 24.9994C45.8327 30.6598 45.8119 31.366 45.7077 33.5869C45.6035 35.8056 45.2535 37.316 44.7389 38.6452C44.2174 40.0364 43.3975 41.2965 42.3369 42.3369C41.2951 43.3959 40.0354 44.2155 38.6452 44.7389C37.3181 45.2535 35.8056 45.6035 33.5869 45.7077C31.366 45.8056 30.6598 45.8327 24.9994 45.8327C19.3389 45.8327 18.6327 45.8119 16.4118 45.7077C14.1931 45.6035 12.6827 45.2535 11.3535 44.7389C9.96253 44.217 8.70253 43.3972 7.66185 42.3369C6.60228 41.2956 5.78254 40.0357 5.25977 38.6452C4.7431 37.3181 4.39518 35.8056 4.29102 33.5869C4.1931 31.366 4.16602 30.6598 4.16602 24.9994C4.16602 19.3389 4.18685 18.6327 4.29102 16.4118C4.39518 14.191 4.7431 12.6827 5.25977 11.3535C5.78109 9.96222 6.60102 8.7021 7.66185 7.66185C8.70283 6.60191 9.96274 5.78212 11.3535 5.25977C12.6827 4.7431 14.191 4.39518 16.4118 4.29102C18.6327 4.1931 19.3389 4.16602 24.9994 4.16602ZM24.9994 14.5827C22.2367 14.5827 19.5872 15.6802 17.6337 17.6337C15.6802 19.5872 14.5827 22.2367 14.5827 24.9994C14.5827 27.762 15.6802 30.4115 17.6337 32.365C19.5872 34.3186 22.2367 35.416 24.9994 35.416C27.762 35.416 30.4115 34.3186 32.365 32.365C34.3186 30.4115 35.416 27.762 35.416 24.9994C35.416 22.2367 34.3186 19.5872 32.365 17.6337C30.4115 15.6802 27.762 14.5827 24.9994 14.5827ZM38.541 14.0618C38.541 13.3712 38.2667 12.7088 37.7783 12.2204C37.2899 11.732 36.6275 11.4577 35.9369 11.4577C35.2462 11.4577 34.5838 11.732 34.0954 12.2204C33.607 12.7088 33.3327 13.3712 33.3327 14.0618C33.3327 14.7525 33.607 15.4149 34.0954 15.9033C34.5838 16.3917 35.2462 16.666 35.9369 16.666C36.6275 16.666 37.2899 16.3917 37.7783 15.9033C38.2667 15.4149 38.541 14.7525 38.541 14.0618ZM24.9994 18.7493C26.657 18.7493 28.2467 19.4078 29.4188 20.5799C30.5909 21.752 31.2494 23.3417 31.2494 24.9994C31.2494 26.657 30.5909 28.2467 29.4188 29.4188C28.2467 30.5909 26.657 31.2494 24.9994 31.2494C23.3417 31.2494 21.752 30.5909 20.5799 29.4188C19.4078 28.2467 18.7493 26.657 18.7493 24.9994C18.7493 23.3417 19.4078 21.752 20.5799 20.5799C21.752 19.4078 23.3417 18.7494 24.9994 18.7493Z" />
            </svg>
          </a>
        </span>
        <span>
          <a
            href={"https://www.facebook.com/himatifunibofficial/"}
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
        </span>
        <span>
          <a
            href={"https://www.youtube.com/@HimatifUnibofficial"}
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-youtube"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
}
