// @flow

import React from 'react';
import type { ComponentType } from 'react';

import { withRouter } from 'react-router';

import { CardsContainer, CardContent } from 'components/Card';
import HeadlineNumbers from "components/HeadlineNumbers";
import type {Props } from './Healthcare.types';
import { getParams } from "common/utils";
import usePageLayout from "hooks/usePageLayout";
import URLs from "common/urls";
import Loading from "components/Loading";
import DataPageHeaders from "components/DataPageHeader";


const
    DefaultParams = [
        { key: 'areaName', sign: '=', value: 'United Kingdom' },
        { key: 'areaType', sign: '=', value: 'overview' }
    ];


const Healthcare: ComponentType<Props> = ({ location: { search: query }}: Props) => {

    const
        urlParams = getParams(query),
        layout = usePageLayout(URLs.pageLayouts.healthcare,  null),
        params = urlParams.length ? urlParams : DefaultParams;

    if ( !layout ) return <Loading large={ true }/>;

    return <>
        <DataPageHeaders category={ "Healthcare" }
                         areaParams={ params }
                         description={
                             "Data and charts on hospital admissions, ICUs, and other " +
                             "healthcare statistics for coronavirus (COVID-19)"
                         }/>
        <HeadlineNumbers params={ params } { ...layout }/>
        <CardsContainer>{
            layout?.cards.map(( cardProps, index ) =>
                <CardContent key={ `card-${ index }` } params={ params } { ...cardProps }/>
            ) ?? null
        }</CardsContainer>
    </>
};

export default withRouter(Healthcare);
