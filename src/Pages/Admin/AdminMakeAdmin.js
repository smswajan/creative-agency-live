import React from 'react';
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import AdminNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import AdminSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import adminSidebarItems from '../../Components/DashboardSidebar/adminSidebarData';


const AdminMakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [admins, setAdmins] = useState([]);
    const [adminCount, setAdminCount] = useState(admins.length);
    const [loading, setLoading] = useState(true);
    const sideBarItems = adminSidebarItems;
    sideBarItems[2].status = " active";
    const onSubmit = (data, e) => {
        data.timeStamp = new Date();
        fetch('https://creative-agency-live-api.herokuapp.com/add-admin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(result => {
            e.target.reset();
            const newCount = adminCount + 1;
            setAdminCount(newCount)
        })
    }
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/admin-list', {
            method: 'GET'
        }).then(response => response.json())
            .then(result => {
                setAdmins(result)
                setLoading(false)
            })
    }, [adminCount])
    document.title = "Admin | Make Admin"
    return (
        <div>
            <AdminNavbar pageTitle="Add new admin" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="bg-white m-4 pt-3 pl-4 circle-form-container">
                        <div className="row">
                            <div className="col-12 p-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="row">
                                    <div className="col-6 d-flex">
                                        <input name="email" placeholder="Email" type="email" className="form-control mr-4" ref={register({ required: true })} />
                                        <button type='submit' className="btn btn-success px-4">ADD</button>
                                    </div>
                                </form>

                                <h4 className="mt-5 mb-3">{loading ? "No one is added as admin" : "Current admins"} </h4>
                                {(admins.length > 0) && admins.map(item => <p>{item.email} </p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMakeAdmin;