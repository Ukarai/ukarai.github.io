import React from 'react'
import { Table } from '@material-ui/core';
import { SkillsTableHead } from './TableHead';
import { SkillsTableBody } from './TableBody';

export const SkillsTable = () => {
    return (
        <div>
            <h1>Skills Table</h1>
            <Table>
                <SkillsTableHead />
                <SkillsTableBody />
            </Table>
        </div>
    );
}