import React, { Fragment } from 'react';
import { BACKGROUND, ACCENTS } from '../../constants/color-palette';

const Loader = () => (
  <Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${BACKGROUND};
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: 1;
          top: 0;
        }
        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
				}
				.lds-ellipsis div {
					position: absolute;
					top: 33px;
					width: 13px;
					height: 13px;
					border-radius: 50%;
					background: ${ACCENTS};
					animation-timing-function: cubic-bezier(0, 1, 1, 0);
				}
				.lds-ellipsis div:nth-child(1) {
					left: 8px;
					animation: lds-ellipsis1 0.6s infinite;
				}
				.lds-ellipsis div:nth-child(2) {
					left: 8px;
					animation: lds-ellipsis2 0.6s infinite;
				}
				.lds-ellipsis div:nth-child(3) {
					left: 32px;
					animation: lds-ellipsis2 0.6s infinite;
				}
				.lds-ellipsis div:nth-child(4) {
					left: 56px;
					animation: lds-ellipsis3 0.6s infinite;
				}
				@keyframes lds-ellipsis1 {
					0% {
						transform: scale(0);
					}
					100% {
						transform: scale(1);
					}
				}
				@keyframes lds-ellipsis3 {
					0% {
						transform: scale(1);
					}
					100% {
						transform: scale(0);
					}
				}
				@keyframes lds-ellipsis2 {
					0% {
						transform: translate(0, 0);
					}
					100% {
						transform: translate(24px, 0);
					}
				}
				`,
      }}
    ></style>
    <template className="loader-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </template>
  </Fragment>
);

export default Loader;