import React from 'react';

export default function InformationBox ({ info }) {
  return (
    <div className="location-info">
      <h2>Location info</h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>Title: <strong>{info.title}</strong></li>
      </ul>

    </div>
  )
}