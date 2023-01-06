import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from "../components/admin/Table";
import Layout from "../components/layout/Layout";

const Admin = () => {

    const [erpMembers, setErpMembers] = useState([]);

    useEffect(() => {
        axios
            .get('/erpMemberList')
            .then((response) => {
                // console.log(response);
                setErpMembers(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Layout title='관리자'>
                <h1 className="text-xl bg-gray-100 p-3">투자자 리스트</h1>
                <Table erpMembers={erpMembers}/>
            </Layout>
        </div>
    );
};

export default Admin;