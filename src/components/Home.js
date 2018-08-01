import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Home = ({data: { loading, error, employees }} ) => {
    if (error) return <h1>Error fetching employees</h1>
    console.log('====================================');
    console.log(loading);
    console.log('====================================');
    if (!loading) {
        
        return (
            <section>   
                <ul>
                    {employees.map(employee => (
                        <li key={`employee-${employee.id}`}>{`${employee.firstName} ${employee.surname}`}</li>
                    ))}
                </ul>
            </section>
        );
    }
    return <h2>Loading employees</h2>
};

export const allEmployees = gql`
query allEmployees {
    employees {
        id
        firstName
        surname
    }
}
`

export default graphql(allEmployees)(Home)
