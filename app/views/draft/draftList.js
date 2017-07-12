import React, { PropTypes } from 'react';
import { ListView } from 'react-native';
import Draft from './draft';

const DraftList = () => {
  var drafts = [
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
  ];
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const draftlist = ds.cloneWithRows(drafts);
  if (drafts.length > 0) {
    return (
      <ListView
        enableEmptySections
        dataSource={draftlist}
        renderRow={(draft, sectionId, rowId) => <Draft draft={draft} rowId={rowId} />}
      />
    );
  }
  return null;
};

// DraftList.propTypes = {
//   drafts: PropTypes.arrayOf(
//     PropTypes.shape({
//       time: PropTypes.string.isRequired,
//       story: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired
//     }),
//   ).isRequired,
// };

export default DraftList;
