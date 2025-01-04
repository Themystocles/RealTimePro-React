import React from 'react';

export interface FetchItemModel<T> {
    url: string;
    renderItem: (item: T) => React.ReactElement;
    title: string
    
}