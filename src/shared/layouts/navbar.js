import React from 'react'
import { Menu } from "shared/layouts/menu"
import {UserModel} from "model/user"

const UserInfo = ({ u = new UserModel() }) => {
    return (
        <div className="d-flex align-items-center me-3 gap-2">
            <img
                className="rounded-circle"
                src={u.avatarURL}
                height={50} width={50} alt="avatar"
            />
            <p className='text-white m-0'>
                {u.firstName} {u.lastName}
            </p>
        </div>
    )
}

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TodoAPP 🔥</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* NAV MENU  */}
                    <Menu />

                    <form className="d-flex align-items-center ">
                        {/* USER INFOS  */}
                        <UserInfo u={new UserModel(1, "Mehdi", "Dev")} />
                        <button className="btn btn-outline-danger" type="submit">logout</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
