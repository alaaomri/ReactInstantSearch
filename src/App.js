import React, { Component } from 'react';
import './App.css';
import {InstantSearch,
        SearchBox, 
        Hits, 
        Highlight,
        Stats,
        Pagination,
        SortBy,
        RefinementList,
        Menu,
        Configure
      } from 'react-instantsearch/dom';

const Hit=({hit})=>
      <div className="hit">
        <div className="hit-image">
          <img src={hit.image} alt=""/>
        </div>
        <div className="hit-content">
          <div className="hit-price">
            ${hit.price}
          </div>
          <div className="hit-name">
            <Highlight attribute="name" hit={hit} />
          </div>         
        </div>
      </div>

const Sidebar=()=>
      <div className="left-column">
        <h5>Category</h5>
        <RefinementList attribute="categories"/>
        <h5>Brand</h5>
        <RefinementList attribute="brand" searchable />
        <h5>Type</h5>
        <Menu attribute="type" showMore={true}
              translations={{
                showMore: 'Voir plus'
        }}/>
        <h5>Name</h5>
        <RefinementList attribute="name"/>
        <Configure hitsPerPage={32} />  
      </div>

const Content=()=><div className="right-column">
                    <div className="info">
                      <Stats/>
                      <SortBy defaultRefinement="instant_search"
                               items={[
                                { value: 'instant_search', label: 'Most Relevant' },
                                { value: 'instant_search_price_asc', label: 'Lowest Price' },
                                { value: 'instant_search_price_desc', label: 'Highest Price' },
                              ]}
                      />
                    </div>
                    <Hits hitComponent={Hit}/>
                    <Pagination showLast />
                  </div>

class App extends Component {

  render() {
    return (
      <InstantSearch  apiKey="6be0576ff61c053d5f9a3225e2a90f76"
                      appId="latency"
                      indexName="instant_search" >
        <header className="header">
          <img alt="instant-search-logo" src="instant_search_logo@2x.png" />
          <SearchBox className="ais-InstantSearch__root" translations={{placeholder: 'Search for Products'}}/>
        </header> 
        <main>
          <Sidebar />
          <Content/>
        </main> 
      </InstantSearch>
    );
  }
}

export default App;
