# grafana-issue-reproducer

This repo is used to reproduce the Bug reported on Grafana under the [Issue 58672](https://github.com/grafana/grafana/issues/58672).

## Details

## How to run

It is only required `docker` installed, then use the command bellow to run the script:

```shell
./start.sh
```

It will start two container:
- One container for Grafana
- One container as an API server to provide data to the Graph

![image](https://user-images.githubusercontent.com/20258509/201398388-81e269a0-e650-43e1-a1b3-e891a825ac89.png)

## How to reproduce the issue?

1. Once the containers are running, open your browser and access Grafana on `http://localhost:3000` <br/>
1.1 Use `admin` as user and password
2. An existing dashboard is already provided with the necessary datasource and variable for filter <br/>
2.1 Open the dashboard
3. By default, the dashboard will load the `producer1` as follow:
![image](https://user-images.githubusercontent.com/20258509/201399179-b0e473c2-62ea-40be-aed0-2351bfd1ee73.png)
3.1 Change it to `producer2`:
![image](https://user-images.githubusercontent.com/20258509/201399292-504aef18-59a1-485c-8215-187676a65d8e.png)
3.2 Now, change it again to `producer1` and the issue will be visible:
![image](https://user-images.githubusercontent.com/20258509/201399439-8ff0d131-0abd-4cec-951d-d06fde8f13a2.png)

### Gift
![Kapture 2022-11-11 at 17 37 35](https://user-images.githubusercontent.com/20258509/201397578-6f7e34f4-f4e9-497b-aa93-13fb6671260a.gif)
