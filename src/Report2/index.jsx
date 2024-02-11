import React, { useState } from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Report2 = () => {

    const [reportConfig, setReportConfig] = useState({
        type: 'report',
        embedUrl: process.env.REACT_APP_PBI_EMBED_URL2,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        id: process.env.REACT_APP_ID2,
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
            <h2>PBI REPORT 2</h2>
            <PowerBIEmbed
                embedConfig={reportConfig}
                cssClassName={'report-size'}
            />
        </div>
    )
}

export default Report2