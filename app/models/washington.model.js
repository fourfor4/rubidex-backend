module.exports = (sequelize, Sequelize) => {
  const washington = sequelize.define("washington", {
    type: {
      type: Sequelize.STRING,
    },
    pro_site_address_pk: {
      type: Sequelize.INTEGER,
    },
    pro_address_id: {
      type: Sequelize.INTEGER,
    },
    pro_roadwaysegid: {
      type: Sequelize.STRING
    },
    pro_status: {
      type: Sequelize.STRING
    },
    pro_ssl: {
      type: Sequelize.STRING
    },
    pro_type_: {
      type: Sequelize.STRING
    },
    pro_entrancetype: {
      type: Sequelize.STRING
    },
    pro_addrnum: {
      type: Sequelize.INTEGER
    },
    pro_addrnumsuffix: {
      type: Sequelize.STRING
    },
    pro_stname: {
      type: Sequelize.STRING
    },
    pro_street_type: {
      type: Sequelize.STRING
    },
    pro_quadrant: {
      type: Sequelize.STRING
    },
    pro_city: {
      type: Sequelize.STRING
    },
    pro_state: {
      type: Sequelize.STRING
    },
    pro_fulladdress: {
      type: Sequelize.STRING
    },
    pro_square: {
      type: Sequelize.STRING
    },
    pro_suffix: {
      type: Sequelize.STRING
    },
    pro_lot: {
      type: Sequelize.STRING
    },
    pro_nationalgrid: {
      type: Sequelize.STRING
    },
    pro_zipcode4: {
      type: Sequelize.STRING
    },
    pro_xcord: {
      type: Sequelize.FLOAT
    },
    pro_ycord: {
      type: Sequelize.FLOAT
    },
    pro_status_id: {
      type: Sequelize.INTEGER
    },
    pro_metadata_id: {
      type: Sequelize.INTEGER
    },
    pro_assessment_nbhd: {
      type: Sequelize.STRING
    },
    pro_assessment_subnbhd: {
      type: Sequelize.STRING
    },
    pro_cfsa_name: {
      type: Sequelize.STRING
    },
    pro_hotspot: {
      type: Sequelize.STRING
    },
    pro_cluster_: {
      type: Sequelize.STRING
    },
    pro_poldist: {
      type: Sequelize.STRING
    },
    pro_roc: {
      type: Sequelize.STRING
    },
    pro_psa: {
      type: Sequelize.STRING
    },
    pro_smd: {
      type: Sequelize.STRING
    },
    pro_census_tract: {
      type: Sequelize.STRING
    },
    pro_vote_prcnct: {
      type: Sequelize.STRING
    },
    pro_ward: {
      type: Sequelize.STRING
    },
    pro_zipcode: {
      type: Sequelize.INTEGER
    },
    pro_anc: {
      type: Sequelize.STRING
    },
    pro_newcommselect06: {
      type: Sequelize.STRING
    },
    pro_newcommcandidate: {
      type: Sequelize.STRING
    },
    pro_census_block: {
      type: Sequelize.STRING
    },
    pro_census_blockgroup: {
      type: Sequelize.STRING
    },
    pro_focus_improvement_area: {
      type: Sequelize.STRING
    },
    pro_se_anno_cad_data: {
      type: Sequelize.STRING
    },
    pro_latitude: {
      type: Sequelize.FLOAT
    },
    pro_longitude: {
      type: Sequelize.FLOAT
    },
    pro_active_res_unit_count: {
      type: Sequelize.INTEGER
    },
    pro_res_type: {
      type: Sequelize.STRING
    },
    pro_active_res_occupancy_count: {
      type: Sequelize.INTEGER
    },
    pro_ward_2002: {
      type: Sequelize.STRING
    },
    pro_ward_2012: {
      type: Sequelize.STRING
    },
    pro_anc_2002: {
      type: Sequelize.STRING
    },
    pro_anc_2012: {
      type: Sequelize.STRING
    },
    pro_smd_2002: {
      type: Sequelize.STRING
    },
    pro_smd_2012: {
      type: Sequelize.STRING
    },
    pro_objectid_12: {
      type: Sequelize.INTEGER
    },
    pro_objectid: {
      type: Sequelize.INTEGER
    },
    pro_objectid_1: {
      type: Sequelize.INTEGER
    },
    pro_anc_2023: {
      type: Sequelize.STRING
    },
    pro_smd_2023: {
      type: Sequelize.STRING
    },
    geometry_type: {
      type: Sequelize.STRING
    },
    getometry_coordinates_1: {
      type: Sequelize.FLOAT
    },
    getometry_coordinates_2: {
      type: Sequelize.FLOAT
    }
  });

  return washington;
};
