import React, { useState } from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Report1 = () => {

    const [reportConfig, setReportConfig] = useState({
        type: 'report',
        embedUrl: process.env.REACT_APP_PBI_EMBED_URL1,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        id: process.env.REACT_APP_ID1,
        tokenType: models.TokenType.Aad,
        filters: [],
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            }
        }
    });

    return (
        <div className='report'>
            <h2>PBI REPORT 1</h2>
            <PowerBIEmbed
                embedConfig={reportConfig}
                cssClassName={'report-size'}
            />
        </div>
    )
}

export default Report1