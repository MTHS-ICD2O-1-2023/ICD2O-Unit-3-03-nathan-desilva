// Copyright (c) 2024 Nathan De Silva. All rights reserved
//
// Created by: Nathan
// Created on: April 2024

'use strict'
/**
 * This function calculates the volume of a sphere
 */

function myButtonClicked() {
  // input
  const radius = parseFloat(document.getElementById('radius').value)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'The Volume is: ' + volume.toFixed(2) + ' mm³'
}
