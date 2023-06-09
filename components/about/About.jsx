import React from 'react'
import Image from 'next/image'
import logo from '../../public/Hamzalogo.webp'

const About = () => {
  return (
    <section id="about">

      <h1 className="titleCommon">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
      </h1>

      <div className="aboutbox">

        <div className="aboutleft">
          <Image src={logo} alt="not found" />
          {/* <Image src="../../img/Hamzalogo.webp" alt="not found" /> */}
        </div>

        <div className="aboutright">
          <div className="aboutboxmin">
            <div className="box1">


              <svg width="3.5rem" height="3.5rem" className="svgCodeColor"
                viewBox="0 0 24 24">
                <path
                  d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z" />
              </svg>

              <h2>Frontend</h2>
              <p>With React-JS</p>
            </div>
            <div className="box1">

              <svg width="3.5rem" height="3.5rem" viewBox="0 0 24 24"
                fill="none">
                <path className="svgCodeColor"
                  d="M12 23.9555C11.6584 23.9555 11.3395 23.8674 11.0435 23.7134L8.01449 21.9748C7.55901 21.7327 7.78675 21.6447 7.9234 21.6006C8.5383 21.4026 8.65217 21.3586 9.28986 21.0064C9.35818 20.9624 9.44928 20.9844 9.5176 21.0284L11.8406 22.3709C11.9317 22.4149 12.0455 22.4149 12.1139 22.3709L21.2008 17.2871C21.2919 17.2431 21.3375 17.1551 21.3375 17.045V6.89944C21.3375 6.7894 21.2919 6.70137 21.2008 6.65735L12.1139 1.59556C12.0228 1.55155 11.9089 1.55155 11.8406 1.59556L2.75362 6.65735C2.66253 6.70137 2.61698 6.81141 2.61698 6.89944V17.045C2.61698 17.1331 2.66253 17.2431 2.75362 17.2871L5.23602 18.6736C6.57971 19.3338 7.42236 18.5636 7.42236 17.7933V7.77975C7.42236 7.6477 7.53623 7.51566 7.69565 7.51566H8.85714C8.99379 7.51566 9.13043 7.6257 9.13043 7.77975V17.7933C9.13043 19.5319 8.15114 20.5443 6.44306 20.5443C5.91925 20.5443 5.50932 20.5443 4.34783 19.9941L1.95652 18.6736C1.36439 18.3435 1 17.7273 1 17.067V6.92145C1 6.26121 1.36439 5.645 1.95652 5.31488L11.0435 0.231082C11.6128 -0.0770272 12.3872 -0.0770272 12.9565 0.231082L22.0435 5.31488C22.6356 5.645 23 6.26121 23 6.92145V17.067C23 17.7273 22.6356 18.3435 22.0435 18.6736L12.9565 23.7574C12.6605 23.8894 12.3188 23.9555 12 23.9555ZM14.8012 16.979C10.8157 16.979 9.99586 15.2184 9.99586 13.7219C9.99586 13.5898 10.1097 13.4578 10.2692 13.4578H11.4534C11.5901 13.4578 11.7039 13.5458 11.7039 13.6778C11.8861 14.8442 12.4099 15.4165 14.824 15.4165C16.7371 15.4165 17.5569 14.9983 17.5569 14.008C17.5569 13.4358 17.3292 13.0176 14.3458 12.7315C11.8634 12.4894 10.3147 11.9612 10.3147 10.0466C10.3147 8.26392 11.8634 7.20755 14.4596 7.20755C17.3747 7.20755 18.8095 8.17589 18.9917 10.2886C18.9917 10.3547 18.9689 10.4207 18.9234 10.4867C18.8778 10.5307 18.8095 10.5747 18.7412 10.5747H17.5569C17.4431 10.5747 17.3292 10.4867 17.3064 10.3767C17.0331 9.16624 16.3271 8.7701 14.4596 8.7701C12.3644 8.7701 12.1139 9.47435 12.1139 10.0025C12.1139 10.6408 12.4099 10.8388 15.234 11.191C18.0352 11.5431 19.3561 12.0493 19.3561 13.9419C19.3333 15.8786 17.6936 16.979 14.8012 16.979Z"
                />
              </svg>

              <h2>Backend</h2>
              <p>With Node-JS</p>
            </div>
            <div className="box1">

              <svg width="3.5rem" height="3.5rem" viewBox="0 0 128.00 128.00" fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fillRule="evenodd" clipRule="evenodd" className="svgCodeColor"
                    d="M37.0409 66.6549L60.4468 75.4433C62.2696 76.1278 64.2795 76.1239 66.0997 75.4325L88.962 66.7484L88.9618 83.4477C88.962 83.4635 88.9621 83.4792 88.9621 83.495C88.9621 88.6399 77.3391 92.8106 63.0015 92.8106C48.6638 92.8106 37.0409 88.6399 37.0409 83.495C37.0409 83.4898 37.0408 83.4845 37.0408 83.4792C37.0408 83.4687 37.0407 83.4582 37.0409 83.4477V66.6549Z"
                  ></path>
                  <path
                    d="M110.065 79.2054C110.846 77.7714 111.729 75.9086 112.477 74.2526C113.059 72.9632 114.716 72.6791 115.428 73.9011C116.677 76.0409 117.5 78.594 117.909 80.2952C118.039 80.8355 117.925 81.4215 117.509 81.7908C115.748 83.3571 113.028 82.9374 110.916 82.1365C109.783 81.7069 109.485 80.2694 110.065 79.2054Z"
                    fill="white"></path>
                  <path fillRule="evenodd" clipRule="evenodd" className="svgCodeColor"
                    d="M114.04 74.1257C113.817 74.1564 113.543 74.3211 113.388 74.664C112.637 76.3276 111.742 78.2169 110.943 79.6836C110.774 79.994 110.737 80.3575 110.815 80.6544C110.89 80.938 111.052 81.1184 111.271 81.2014C112.259 81.5763 113.345 81.8434 114.352 81.8514C115.352 81.8593 116.204 81.6137 116.845 81.0435C116.917 80.9798 117.004 80.8086 116.937 80.5293C116.54 78.8819 115.746 76.4307 114.565 74.405C114.422 74.1595 114.233 74.0991 114.04 74.1257ZM113.767 72.1445C114.726 72.0122 115.723 72.4207 116.292 73.3972L115.428 73.9011M113.767 72.1445C112.838 72.2726 111.993 72.8947 111.565 73.8412L113.767 72.1445ZM116.292 73.3972C117.607 75.6511 118.459 78.3061 118.881 80.0611C119.074 80.8625 118.933 81.8632 118.174 82.5381C117.054 83.5342 115.664 83.8619 114.336 83.8513C113.015 83.8408 111.685 83.4976 110.561 83.0715C108.685 82.3599 108.416 80.1426 109.186 78.7271C109.95 77.3259 110.821 75.4898 111.565 73.8412"
                  ></path>
                  <path fillRule="evenodd" clipRule="evenodd" className="svgCodeColor"
                    d="M112.252 71.6091C112.679 71.2594 113.309 71.3224 113.659 71.7498C114.002 72.169 114.178 72.785 114.289 73.2976C114.41 73.863 114.494 74.524 114.552 75.1886C114.668 76.521 114.688 77.963 114.671 78.8885C114.661 79.4407 114.205 79.8802 113.653 79.8702C113.101 79.8602 112.661 79.4044 112.672 78.8522C112.687 77.9757 112.668 76.6066 112.56 75.3621C112.505 74.7382 112.431 74.1694 112.334 73.7189C112.285 73.4938 112.235 73.3157 112.186 73.1838C112.14 73.0593 112.109 73.0142 112.109 73.0139C112.109 73.0138 112.11 73.0147 112.111 73.0163C111.761 72.5889 111.824 71.9589 112.252 71.6091Z"
                  ></path>
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M113.475 52.3058C114.303 52.3058 114.975 52.9774 114.975 53.8058V70.4171C114.975 71.2456 114.303 71.9171 113.475 71.9171C112.646 71.9171 111.975 71.2456 111.975 70.4171V53.8058C111.975 52.9774 112.646 52.3058 113.475 52.3058Z"
                  ></path>
                  <path className="svgCodeColor"
                    d="M117.603 71.0069C117.603 73.2869 115.755 75.1352 113.475 75.1352C111.195 75.1352 109.347 73.2869 109.347 71.0069C109.347 68.727 111.195 66.8787 113.475 66.8787C115.755 66.8787 117.603 68.727 117.603 71.0069Z"
                  ></path>
                  <path className="svgCodeColor"
                    d="M60.1547 33.0997L11.6849 52.4133C10.7891 52.7703 10.8019 54.0427 11.7046 54.3817L60.3131 72.6331C62.2367 73.3554 64.3578 73.3513 66.2786 72.6217L114.302 54.3803C115.2 54.0393 115.212 52.774 114.322 52.4149L66.4363 33.1122C64.422 32.3003 62.1722 32.2958 60.1547 33.0997Z"
                  ></path>
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M100.016 55.5271C100.205 56.0459 99.938 56.62 99.4192 56.8093L65.2136 69.2924C64.6947 69.4817 64.1207 69.2146 63.9313 68.6958C63.742 68.177 64.0091 67.6029 64.5279 67.4136L98.7335 54.9305C99.2524 54.7412 99.8264 55.0083 100.016 55.5271Z"
                    fill="white"></path>
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M19.5669 53.2122C19.7571 52.6937 20.3317 52.4275 20.8502 52.6177L32.2819 56.8112C32.8004 57.0014 33.0665 57.5759 32.8763 58.0944C32.6861 58.6129 32.1116 58.8791 31.5931 58.6889L20.1614 54.4954C19.6429 54.3052 19.3767 53.7307 19.5669 53.2122Z"
                    fill="white"></path>
                </g>
              </svg>


              <h2>Experience</h2>
              <p>2 Year-Working</p>
            </div>
          </div>
          <div className="aboutboxdown">
            <p>

              Hi I am a Software Engineer as a software engineer I have a excellent problem-solving skills and ability to perform well in a team. Passionate about coding
              and enjoy teaching coding online on YouTube.As a frontend developer I am able to build any frontend
              design from scratch with the help of reactjs and any other work related to back-end with NodeJS.You should
              hire me for this position because of my proven ability to build efficient front-end user
              interfaces in line with modern best practices. I am experienced in using JavaScript and TypeScript</p>
            <div className="mainBtn">
              <a className="wrapper" href="#contact">
                <button className="main-btn">
                  CONTACT US
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </a>
            </div>
          </div>

        </div>



      </div>

    </section>
  )
}

export default About