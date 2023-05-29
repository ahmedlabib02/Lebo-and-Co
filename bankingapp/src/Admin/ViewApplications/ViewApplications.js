import ButtonCard from "../../Components/ButtonCard";
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
import { TbLock } from 'react-icons/tb';
import { TiUserDeleteOutline } from 'react-icons/ti'
import { CiViewList } from 'react-icons/ci';
import React, { useState } from 'react';

function ViewApplications(){

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
          <MenuBar />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>25</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>30</td>
              <td>jane@example.com</td>
            </tr>
          </tbody>
        </table>
        </div>
      );
}
export default ViewApplications;