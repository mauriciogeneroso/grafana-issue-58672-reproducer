FROM grafana/grafana:9.1.1

RUN grafana-cli plugins install hamedkarbasi93-nodegraphapi-datasource 1.0.1
RUN grafana-cli plugins update-all

COPY ./provisioning/ /etc/grafana/provisioning/