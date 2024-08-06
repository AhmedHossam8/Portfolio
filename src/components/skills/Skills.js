import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import skills from '../../data/skills.json';
import './skills.css';

export default function Skills() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                <h1 className='skills-title'>My Skills</h1>
            </div>
            <div>
                <Box className="skills-container">
                    <TabContext value={value} sx={{ color: 'white' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="skills tabs">
                                {skills.tabs.map((tab, index) => (
                                    <Tab
                                        key={index}
                                        label={tab.title}
                                        value={(index + 1).toString()}
                                        className="tab-label"
                                    />
                                ))}
                            </TabList>
                        </Box>
                        {skills.tabs.map((tab, index) => (
                            <TabPanel key={index} value={(index + 1).toString()} className='tab-panel'>
                                {tab.content.map((section, idx) => (
                                    <Box key={idx} className="box">
                                        <h3 className='skill-titles'>{section.sectionTitle}</h3>
                                        <ul className='skill-contents'>
                                            {section.items.map((item, id) => (
                                                <li key={id}>{item}</li>
                                            ))}
                                        </ul>
                                    </Box>
                                ))}
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}