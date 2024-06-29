import { Link } from "react-router-dom";

function getItem(
  menuIds: any,
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): any {
  return {
    key,
    icon,
    menuIds,
    label,
  } satisfies any;
}

export const getSideNavMenu = (data: any): any => {
  const result = [] as any;
  data?.map((item: any) => {
    result.push(
      ...[
        getItem(
          item?.key,
          <Link to={item?.path}>{item?.label}</Link>,
          item?.key,
          item?.icon
        ),
      ]
    );
  });
  return result;
};
