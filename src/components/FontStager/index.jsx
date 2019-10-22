import React from 'react';
import FoutStager from 'react-fout-stager';
import './index.css';

/**
 * Responsible for loading the application typefaces progressively
 * using FOUT stage techniques.
 */
function FontStager() {
  return (
    <FoutStager
      stages={[
        {
          className: 'font-stage-primary',
          families: [{ family: 'Roboto400' }],
          stages: [
            {
              className: 'font-stage-secondary',
              families: [
                { family: 'Roboto300', options: { weight: 300 } },
                { family: 'Roboto500', options: { weight: 500 } },
              ],
            },
          ],
        },
      ]}
    />
  );
}

export default FontStager;
