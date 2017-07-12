import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import FavoriteList from '../Story/storyList';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';

import Footer from '../../components/Footer'
import style from '../Story/styles';

class ViewFavorite extends React.Component {

  constructor() {
    super();
    this.state = {
      favorites: favorites,
    };
    this.searchBar = {};
  }

  _handleResults(favorites) {
    this.setState({ favorites: favorites });
  }

  searchHide(){
    this.searchBar.hide();
  }

  searchShow(){
    this.searchbar.show();
  }

  render() {
    return (
      <View style={style.mainContainer}>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={favorites}
          handleResults={this._handleResults}
        />

        <View style={style.tranning}>
          <View style={style.menuTranning}>
            <Text
              style={{
                flex: 1,
                color: '#fff',
                fontSize: 25,
                paddingLeft: 10,
              }}
            >
              Home
            </Text>
            <Icon name="search" size={30} color="white" />
          </View>
          <FavoriteList list={favorites}/>
        </View>
        <Footer />
      </View>
    );
  }
}

var favorites = [
  {
    time: '00.00',
    title: 'Lorem ipsum',
    favorite: false,
    drafts: [
      {
        time: '00.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '02.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      }
    ],
  },
  {
    time: '00.00',
    title: 'Lorem ipsum',
    favorite: false,
    drafts: [
      {
        time: '00.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '02.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      }
    ],
  },
  {
    time: '00.00',
    title: 'Lorem ipsum',
    favorite: true,
    drafts: [
      {
        time: '00.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '02.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      }
    ],
  },
  {
    time: '00.00',
    title: 'Lorem ipsum',
    favorite: false,
    drafts: [
      {
        time: '00.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '02.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      }
    ],
  },
  {
    time: '00.00',
    title: 'Lorem ipsum',
    favorite: true,
    drafts: [
      {
        time: '00.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '01.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      },
      {
        time: '02.00',
        story: '        Lorem ipsum dolor sit amet, zril prompta nominati qui te, tollit dissentiet instructior id usu. Recteque deseruisse intellegam vel cu. Eu rebum vulputate voluptatibus nam, sed eu tota vivendum facilisi. Tritani salutatus ne vim, pri tation aperiam intellegam et. Tamquam fabulas maiorum vel ut, nec debitis tractatos omittantur ne. Vel ne reque ridens iisque.',
        title: 'Lorem ipsum'
      }
    ],
  }
];

export default ViewFavorite;
