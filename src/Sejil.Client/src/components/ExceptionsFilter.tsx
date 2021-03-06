// Copyright (C) 2017 Alaa Masoud
// See the LICENSE file in the project root for more information.

import * as React from 'react';

import { inject, observer } from 'mobx-react';

import Store from '../Store';
import { action } from 'mobx';

interface IProps {
    store?: Store;
}

interface IState {
    selected: boolean;
}

@inject('store')
@observer
export default class ExceptionsFilter extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.setExceptionsOnlyFilter = this.setExceptionsOnlyFilter.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.state = { selected: false };
    }

    @action setExceptionsOnlyFilter() {
        this.setState({
            selected: true
        });

        this.props.store!.exceptionsOnly = true;
        this.props.store!.reset();
    }

    clearFilter() {
        this.setState({
            selected: false
        });

        this.props.store!.exceptionsOnly = false;
        this.props.store!.reset();
    }

    render() {
        const { selected } = this.state;

        return (
            <div className="section">
                <div className="section-header">Log Exceptions Filteration</div>
                <div className={`section-item ${selected ? 'selected' : ''}`} onClick={this.setExceptionsOnlyFilter}>
                    Exceptions Only
                </div>
                <div className="section-item" onClick={this.clearFilter}>
                    Clear
                </div>
            </div>
        );
    }
}
