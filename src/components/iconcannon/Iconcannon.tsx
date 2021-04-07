import React from 'react';
import './iconcannon.css';
import { FcViewDetails, FcVideoCall, FcStackOfPhotos, FcSettings, FcPrivacy, FcPanorama, FcOnlineSupport, FcDeployment, FcFilm, FcGoogle, FcAndroidOs, FcBriefcase, FcCalendar, FcChargeBattery, FcCursor, FcElectronics, FcFeedback, FcFlashOn, FcGrid, FcMindMap } from "react-icons/fc";

interface IconcannonProps {
  color?: string;
}

export const Iconcannon: React.FC<IconcannonProps> = ({ color = "black" }) => {

  const icons = [
    <FcOnlineSupport />,
    <FcDeployment />,
    <FcFilm />,
    <FcGoogle />,
    <FcAndroidOs />,
    <FcBriefcase />,
    <FcCalendar />,
    <FcChargeBattery />,
    <FcCursor />,
    <FcElectronics />,
    <FcFeedback />,
    <FcFlashOn />,
    <FcGrid />,
    <FcMindMap />,
    <FcPanorama />,
    <FcPrivacy />,
    <FcSettings />,
    <FcStackOfPhotos />,
    <FcVideoCall />,
    <FcViewDetails />
  ]

  return (
    <div className="iconcannon" style={{ fontSize: '5em' }}>
      {icons.map((icon, index)=>(<div className="cannon" style={{ animationDelay: `${index*300}ms` }}>{icon}</div>))}
    </div>
  );
};
