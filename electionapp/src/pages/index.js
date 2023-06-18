import React from 'react';
import { Route, Routes } from "react-router-dom";
import Candidates from "./candidates";
import Dashboard from "./dashboard";
import Voters from "./voters";
import AddVoter from './voters/add';
import VoterList from './voters/list';
import CandidateList from './candidates/list';
import AddCandidates from './candidates/add';
import Positions from './positions';
import PositionsList from './positions/list';
import AddPositions from './positions/add';

const MainApp = () => {
  return (
    <div>
<Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route index element={<Dashboard />} />
{/* Voter page route */}
        <Route path="voters" element={<Voters />}>
            <Route path="add" element={<AddVoter />} />
            <Route path="list" element={<VoterList />} />
        </Route>

{/* Candidate page route */}

        <Route path="candidates" element={<Candidates />}>
                <Route path="add" element={<AddCandidates />} />
                <Route path="list" element={<CandidateList />} /> 
        </Route>
        <Route path="positions" element={<Positions />}>
           <Route path="add" element={<AddPositions />} />
           <Route path="list" element={<PositionsList />} /> 
        </Route>
</Routes>
    </div>
  );
};

export default MainApp;