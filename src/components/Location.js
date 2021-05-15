import React from 'react';
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/';
import locationIcon from "@iconify/icons-mdi/alert-circle"

export default function Location({long, lat, onClick}){
  return(
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  )
}