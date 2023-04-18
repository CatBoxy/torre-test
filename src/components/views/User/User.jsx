import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../header/Header';

const { VITE_APP_API_BIO_ENDPOINT } = import.meta.env;

const User = () => {

    const [data, setData] = useState();
    const [strengths, setStrengths] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://torre-back-ke73uobv6q-uc.a.run.app/api/user');
                setData(response.data);
                setStrengths(response.data.strengths);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return (
            <>
                <Header />
                <main id='user'>
                    <div>Loading...</div>
                </main>
            </>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Header />
            <main id='user'>
                <div className='mainLayout'>
                    <div className='avatar'>
                        <img className='avatarImage' src="" alt="" />
                        <h3 className='avatarName'></h3>
                    </div>
                    <div className='skills'>
                        <div className='skill'>
                            <h2>Master</h2>
                            {strengths
                                .filter((strength) => strength.proficiency === 'master')
                                .map((strength) => (
                                    <button key={strength.id}>{strength.name}</button>
                                ))}
                        </div>
                        <div className='skill'>
                            <h2>Expert</h2>
                            {strengths
                                .filter((strength) => strength.proficiency === 'expert')
                                .map((strength) => (
                                    <button key={strength.id}>{strength.name}</button>
                                ))}
                        </div>
                        <div className='skill'>
                            <h2>Proficient</h2>
                            {strengths
                                .filter((strength) => strength.proficiency === 'proficient')
                                .map((strength) => (
                                    <button key={strength.id}>{strength.name}</button>
                                ))}
                        </div>
                        <div className='skill'>
                            <h2>Begginer</h2>
                            {strengths
                                .filter((strength) => strength.proficiency === 'novice')
                                .map((strength) => (
                                    <button key={strength.id}>{strength.name}</button>
                                ))}
                        </div>
                        <div className='skill'>
                            <h2>No experience, but interested</h2>
                            {strengths
                                .filter((strength) => strength.proficiency === 'no-experience-interested')
                                .map((strength) => (
                                    <button key={strength.id}>{strength.name}</button>
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default User;
