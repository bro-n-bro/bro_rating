from flask import Flask, jsonify, abort, request
from config import API_HOST, API_PORT, NETWORKS
from db import get_network_api_data, get_validator_api_data


app = Flask(__name__)


@app.route('/bro_score', methods=['GET'])
def get_network():
    network = request.args.get('network', default='bostrom', type=str)
    validator = request.args.get('validator', default=None, type=str)
    limit = request.args.get('limit', default=-1, type=int)
    if not validator:
        network_data = get_network_api_data(network, limit)
        return jsonify({
            "schema": ['moniker', 'operator_address', 'staked', 'greed', 'ownership', 'voted', 'validator_rank', 'total', 'rank', 'diff'],
            "result": network_data[1],
            "last_update": network_data[0]
        })
    elif not network and not validator:
        abort(404)
    elif not network or network not in [n['name'] for n in NETWORKS]:
        abort(404)
    else:
        validator_data = get_validator_api_data(network, validator)
        return jsonify({
            "schema": ['moniker', 'operator_address', 'staked', 'greed', 'ownership', 'voted', 'validator_rank', 'total', 'rank', 'diff'],
            "result": validator_data[1],
            "last_update": validator_data[0]
        })


if __name__ == '__main__':
    app.run(host=API_HOST, port=API_PORT)