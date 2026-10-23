/** Screen 87:539 — Menu thao tác phiếu. Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgSvg = "/assets/d51efcfb-8840-42e1-99fb-f43087f3e074.svg";
const imgSvg1 = "/assets/26ba0373-f98c-4be4-bbe2-ec21c6cca688.svg";
const imgSvg2 = "/assets/716788ac-3415-4202-bb46-c51e487e133d.svg";
const imgSvg3 = "/assets/983c7b93-aeb3-414e-b71e-c3101edaa981.svg";
const imgSvg4 = "/assets/b4504894-4551-49c0-b59c-5ed86aaf2e25.svg";

export default function BackgroundBorder() {
  return (
    <div className="ba-c876066966" data-node-id="87:539" data-name="Background+Border">
      <div className="ba-5e8a49d805" data-node-id="87:540" data-name="Overlay+Shadow" />
      <div className="ba-67366dcb7c" data-node-id="87:541" data-name="Button">
        <div className="ba-f23d90c229">
          <div className="ba-c51752dc8c" data-node-id="87:542" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg} />
          </div>
          <div className="ba-9c2c0538be" data-node-id="87:544" data-name="Container">
            <div className="ba-2c311271a7" data-node-id="87:545">
              <p className="ba-0543b847c7">Sửa phiếu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-67366dcb7c" data-node-id="87:546" data-name="Button">
        <div className="ba-f23d90c229">
          <div className="ba-c51752dc8c" data-node-id="87:547" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg1} />
          </div>
          <div className="ba-8a553e3eca" data-node-id="87:549" data-name="Container">
            <div className="ba-2c311271a7" data-node-id="87:550">
              <p className="ba-0543b847c7">Thu hồi phiếu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-67366dcb7c" data-node-id="87:551" data-name="Button">
        <div className="ba-f23d90c229">
          <div className="ba-c51752dc8c" data-node-id="87:552" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg2} />
          </div>
          <div className="ba-18d449e518" data-node-id="87:554" data-name="Container">
            <div className="ba-b62a125a1d" data-node-id="87:555">
              <p className="ba-0543b847c7">In phiếu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-67366dcb7c" data-node-id="87:556" data-name="Button">
        <div className="ba-f23d90c229">
          <div className="ba-c51752dc8c" data-node-id="87:557" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg3} />
          </div>
          <div className="ba-33ad32a744" data-node-id="87:560" data-name="Container">
            <div className="ba-c6e9e113dd" data-node-id="87:561">
              <p className="ba-0543b847c7">Xem lý do từ chối</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-67366dcb7c" data-node-id="87:562" data-name="Button">
        <div className="ba-f23d90c229">
          <div className="ba-c51752dc8c" data-node-id="87:563" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg4} />
          </div>
          <div className="ba-10ef3f8c86" data-node-id="87:566" data-name="Container">
            <div className="ba-b62a125a1d" data-node-id="87:567">
              <p className="ba-0543b847c7">Xem chi tiết</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
