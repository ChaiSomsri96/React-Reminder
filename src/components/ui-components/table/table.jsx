import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
class TableHeader extends Component {
    render () {
        const { headers } = this.props
        return (
            <thead>
                <tr>
                    {
                        headers.map((item, i) => {
                            let { label, className, data_sort, scope }=item;
                            return (
                                <th key={i} className={className} data-sort={data_sort} scope={scope}>
                                    { label}
                                </th>
                            );
                    })}
                </tr>
            </thead>
        )
    }
}

class Pagination extends Component {
    static propTypes = {
        totalItems: PropTypes.number,
        itemsPerPage : PropTypes.number,
        pageIndex: PropTypes.number,
        pageIndexHandler: PropTypes.func
    }
    render () {
        const { totalItems, itemsPerPage, pageIndex, pageIndexHandler } = this.props
        const start = (pageIndex - 1) * itemsPerPage + 1
        const end = pageIndex * itemsPerPage > totalItems ? totalItems : pageIndex * itemsPerPage
        const maxPageCount = Math.ceil(totalItems/itemsPerPage);
        let startPage = 0;
        let endPage = 0;
        if (pageIndex < 4) {
            startPage = 1
            endPage = maxPageCount >= 5 ? 5 : maxPageCount
        } else if((pageIndex + 2) <= maxPageCount ){
            startPage = pageIndex - 2
            endPage = startPage + 4
        } else if((pageIndex + 2) > maxPageCount) {
            startPage = maxPageCount - 4
            if( startPage < 1) startPage = 1
            endPage = maxPageCount
        }
        let pages = []
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }
        return (
            <div className = 'row'>
            <div className = 'col-sm-5 hidden-xs'>
                <div className = 'dataTables_info'>
                total&nbsp;<strong>{totalItems}</strong>&nbsp;of&nbsp;<strong>{start}</strong>-<strong>{end}</strong>
                </div>
            </div>
            <div className = 'col-sm-7 col-xs-12 clearfix'>
                <div className = 'dataTables_paginate paging_bootstrap' id='ecom-products_paginate'>
                <ul className = 'pagination pagination-sm remove-margin'>
                    <li className = {'prev' + (pageIndex === 1 ? ' disabled' : '')}
                    onClick = {() => pageIndexHandler && pageIndexHandler(pageIndex, '-')}>
                    <a> <i className = 'fa fa-chevron-left'/> </a>
                    </li>
                    { pages.map((item) => {
                        return (
                        <li key = {item}
                            onClick = {() => pageIndexHandler && pageIndexHandler(item, '=')}
                            className = {item === pageIndex ? 'active' : ''}>
                            <a>{item}</a>
                        </li>
                        )
                    })
                    }
                    <li className = {'next' + (pageIndex >= maxPageCount ? ' disabled' : '')}
                        onClick = {() => pageIndexHandler && pageIndexHandler(pageIndex, '+', maxPageCount)}>
                        <a> <i className = 'fa fa-chevron-right' /> </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        )
    }
}

class ItemsPerPage extends Component{
    render(){
        if(this.props.itemsPerPageHandler)
            return (
                <div>
                    <label>
                    <select
                        onChange={(e) => this.props.itemsPerPageHandler(parseInt(e.target.value))}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                    </select>
                    </label>
                </div>
            );
        return <div></div>
    }
}

class TableOptions extends Component {
    static propTypes = {
      itemsPerPageHandler: PropTypes.func,
      searchHandler: PropTypes.func
    }
    constructor(props) {
      super(props)
      this.state = {
        searchCriteria: ''
      }
    }
    render () {
        const { itemsPerPageHandler, searchHandler } = this.props
        const { searchCriteria } = this.state
        return (
            <div style = {{ paddingBottom: 10 }}>
                <div>
                    <ItemsPerPage itemsPerPageHandler={itemsPerPageHandler} />
                </div>
                <div>
                    <div>
                        <label>
                            <div style = {{ maxWidth: 300 }}>
                                <input type = 'search' placeholder = 'search'
                                    value = { searchCriteria }
                                    onChange = {(e) => this.setState({ searchCriteria: e.target.value })} />
                                <span
                                    onClick={ () => searchHandler(searchCriteria) }>
                                    <i className = 'fa fa-search' />
                                </span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
class Table extends Component{
    static propTypes = {
        totalItems: PropTypes.number,
        itemsPerPage: PropTypes.number,
        pageIndex: PropTypes.number,
        pageIndexHandler: PropTypes.func,
        hasOptions: PropTypes.bool,
        rowRender: PropTypes.func,
        itemsPerPageHandler: PropTypes.func,
        searchHandler: PropTypes.func
    }
    constructor(props) {
      super(props)
      this.state = {
        itemsPerPage: 10,
        data: this.props.data
      }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            data:nextProps.data
        })
    }
    render(){
        const {data} = this.props;
        const { headers, hasOptions, itemsPerPage,
            totalItems, pageIndex, itemsPerPageHandler,
            pageIndexHandler, rowRender, searchHandler } = this.props;
        const className = this.props.className ? this.props.className:'table align-items-center';
        return(
            <Fragment>
            { hasOptions &&
                <TableOptions
                    itemsPerPageHandler = { itemsPerPageHandler && itemsPerPageHandler.bind(this) }
                    searchHandler = { searchHandler.bind(this) } />
            }
            <table className={className}>
                <TableHeader headers = { headers } />
                <tbody className="list">
                {
                    data && data.map((itm, i) => rowRender(itm, i))
                }
                </tbody>
            </table>
            </Fragment>
        );
    }
}
Table.defaultProps = {
    hasOptions: false
}

export default Table;
