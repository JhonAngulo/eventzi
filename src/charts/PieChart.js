import React, { useEffect } from 'react'
import c3 from 'c3'

const DonutChart = () => {
  useEffect(() => {
    c3.generate({
      bindto: '#donut_chart',
      // size: {
      //   height: 400,
      //   width: 600
      // },
      data: {
        // iris data from R
        columns: [
          [
            'setosa',
            0.2,
            0.2,
            0.2,
            0.2,
            0.2,
            0.4,
            0.3,
            0.2,
            0.2,
            0.1,
            0.2,
            0.2,
            0.1,
            0.1,
            0.2,
            0.4,
            0.4,
            0.3,
            0.3,
            0.3,
            0.2,
            0.4,
            0.2,
            0.5,
            0.2,
            0.2,
            0.4,
            0.2,
            0.2,
            0.2,
            0.2,
            0.4,
            0.1,
            0.2,
            0.2,
            0.2,
            0.2,
            0.1,
            0.2,
            0.2,
            0.3,
            0.3,
            0.2,
            0.6,
            0.4,
            0.3,
            0.2,
            0.2,
            0.2,
            0.2,
          ],
          [
            'versicolor',
            1.4,
            1.5,
            1.5,
            1.3,
            1.5,
            1.3,
            1.6,
            1.0,
            1.3,
            1.4,
            1.0,
            1.5,
            1.0,
            1.4,
            1.3,
            1.4,
            1.5,
            1.0,
            1.5,
            1.1,
            1.8,
            1.3,
            1.5,
            1.2,
            1.3,
            1.4,
            1.4,
            1.7,
            1.5,
            1.0,
            1.1,
            1.0,
            1.2,
            1.6,
            1.5,
            1.6,
            1.5,
            1.3,
            1.3,
            1.3,
            1.2,
            1.4,
            1.2,
            1.0,
            1.3,
            1.2,
            1.3,
            1.3,
            1.1,
            1.3,
          ],
          [
            'virginica',
            2.5,
            1.9,
            2.1,
            1.8,
            2.2,
            2.1,
            1.7,
            1.8,
            1.8,
            2.5,
            2.0,
            1.9,
            2.1,
            2.0,
            2.4,
            2.3,
            1.8,
            2.2,
            2.3,
            1.5,
            2.3,
            2.0,
            2.0,
            1.8,
            2.1,
            1.8,
            1.8,
            1.8,
            2.1,
            1.6,
            1.9,
            2.0,
            2.2,
            1.5,
            1.4,
            2.3,
            2.4,
            1.8,
            1.8,
            2.1,
            2.4,
            2.3,
            1.9,
            2.3,
            2.5,
            2.3,
            1.9,
            2.0,
            2.3,
            1.8,
          ],
        ],
        type: 'pie',
        onclick: function (d, i) {
          console.log('onclick', d, i)
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i)
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i)
        },
      },
    })
  }, [])

  return <div id='donut_chart' />
}

export default DonutChart