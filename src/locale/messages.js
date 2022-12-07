export default {
    // English
    en: {
        message: {
            'page_title': 'Bro rating',

            // Home
            'home_title': "Bro rating",
            'home_desc': "Board was created by Bro_n_Bro validator<br> The best support for us - your delegations on Cyber, Osmo, NGM, Juno, Stars, Microtick, Gravity, Omniflix! Follow us on twitter on this and our other tools! 👊",

            // Compare
            'compare_title': 'Comparison result',
            'compare_hide_options': 'Hide identical options',
            'compare_yes': 'Yes',
            'compare_no': 'No',

            'compare_title_col_greed': 'Greed',
            'compare_title_col_cost': 'Cost optimization',
            'compare_title_col_power': 'Voting power rank',
            'compare_title_col_decentralization': 'Decentralization',
            'compare_title_col_ownership': 'Ownership',
            'compare_title_col_confidence': 'Confidence',
            'compare_title_col_voted': 'Props voted',
            'compare_title_col_participation': 'Participation',
            'compare_title_col_blurring': 'Tokens blurring',
            'compare_title_col_reliability': 'Reliability',
            'compare_title_col_active_set': 'In active set',
            'compare_title_col_total': 'Total',
            'compare_title_col_score': 'Bro score',

            'compare_error_modal_title': 'You are able to pin only {limit} validators',
            // 'compare_error_modal_desc': 'Amet, luctus cras dolor sed mattis sed faucibus. Elit.',

            // Notice
            'notice_default': '',
            'notice_col_score': 'The score of the validator by bro score.',
            'notice_col_power': 'The score of validator according by voting power.',
            'notice_col_moniker': 'The moniker of the validator.',
            'notice_col_cost': 'The cost optimization criteria of the validator. It depends on the validator’s commission ({greed}%) and decreases when the commission increases. It’s equal to zero if the commission of the validator is zero to avoid the advertising effect.',
            'notice_col_decentralization': 'This criterion helps decentralize the network. The decentralization level depends on the validator’s voting power rank ({validator_rank}). It logarithmically increases with increasing rank number.',
            'notice_col_confidence': 'The confidence of the validator depends on the share of tokens ({ownership}) which validator delegates to itself. It increases from 0 to 20% rapidly and then decreases back to zero, to avoid super-newby validators and CEXes.',
            'notice_col_participation': 'This criterion is about the number of votes ({voted}) for the last 5 ended proposals.',
            'notice_col_reliability': 'We can define reliability without any precommits calculations. To understand the reliability we can divide staked tokens ({staked} {token}) into delegator shares ({delegator_shares} {token}). The result should be equal to 1 if everything is ok and there is no token loss by slashing. Otherwise, the criterion points decrease with the result decrease.',
            'notice_col_total': 'The sum of the criteria points',

            // Rtaing
            'rating_block_title': 'Validators',
            'last_updated': 'Last updated',

            'title_col_score': 'Bro score',
            'title_col_power': 'Voting power',
            'title_col_moniker': 'Moniker',
            'title_col_cost': 'Cost optimization',
            'title_col_decentralization': 'Decentralization',
            'title_col_confidence': 'Confidence',
            'title_col_participation': 'Participation',
            'title_col_reliability': 'Reliability',
            'title_col_total': 'Total',

            'filter_title': 'Change visibility of columns',

            // Placeholders
            'search_placeholder': 'Validator name',
            'choose_network_placeholder': 'Choose network',

            // Buttons
            'compare_btn': 'Compare',
            'see_results_btn': 'See results',
            'delegate_btn': 'Delegate',
            'back_btn': 'Back to Validators list'
        }
    }
}