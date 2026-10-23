/** Screen 123:1367 — Menu biên bản bàn giao. Presentation adapted from Figma. */
import { h } from "../design-runtime.jsx";
const imgSvg = "/assets/7e65a572-8004-4ce5-b4b9-329c0bd97676.svg";
const imgSvg1 = "/assets/d33e634b-758e-492a-8b7e-cccc39d08011.svg";
const imgSvg2 = "/assets/a0d60067-6ae0-44ff-97a9-ad37256ed378.svg";

export default function BackgroundBorder() {
  return (
    <div className="ba-c876066966" data-node-id="123:1367" data-name="Background+Border">
      <div className="ba-01043773e3" data-node-id="123:1368" data-name="Overlay+Shadow" />
      <div className="ba-67366dcb7c" data-node-id="123:1369" data-name="Link">
        <div className="ba-f23d90c229">
          <div className="ba-c51752dc8c" data-node-id="123:1370" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg} />
          </div>
          <div className="ba-39ca0321a1" data-node-id="123:1373" data-name="Container">
            <div className="ba-28321697bd" data-node-id="123:1374">
              <p className="ba-bf919b50f6">Xem chi tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-67366dcb7c" data-node-id="123:1375" data-name="Link">
        <div className="ba-319873b541">
          <div className="ba-c51752dc8c" data-node-id="123:1376" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg1} />
          </div>
          <div className="ba-39ca0321a1" data-node-id="123:1378" data-name="Container">
            <div className="ba-28321697bd" data-node-id="123:1379">
              <p className="ba-bf919b50f6">Sửa biên bản</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ba-3ee36d6383" data-node-id="123:1380" data-name="Horizontal Divider" />
      <div className="ba-67366dcb7c" data-node-id="123:1381" data-name="Link">
        <div className="ba-51264d4dc5">
          <div className="ba-c51752dc8c" data-node-id="123:1382" data-name="SVG">
            <img alt="" className="ba-8faf267d30" src={imgSvg2} />
          </div>
          <div className="ba-39ca0321a1" data-node-id="123:1384" data-name="Container">
            <div className="ba-28321697bd" data-node-id="123:1385">
              <p className="ba-bf919b50f6">In biên bản</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
